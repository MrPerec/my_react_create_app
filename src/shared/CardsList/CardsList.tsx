import React, { useContext } from 'react';
import styles from './cardslist.css';

import { Card } from './Card/Card';
import { postsContext } from '../../context/PostsContext';
import { IPostData } from '../../hooks/usePostsData';

export function CardsList() {
  const { postsData, loading, errorLoading } = useContext(postsContext);

  let cardsListText = 'Список пуст';
  if (loading) cardsListText = 'Загрузка...';
  if (errorLoading) cardsListText = errorLoading;

  let cardsListElem = <li style={{ margin: '0 auto' }}>{cardsListText}</li>;

  if (postsData.length && !loading && !errorLoading) {
    const cardsItems = postsData.map((postData: IPostData, index) => {
      return <Card key={`${postData?.id}${index}`} cardData={postData} />;
    });
    cardsListElem = <>{cardsItems}</>;
  }

  return <ul className={styles.cardsList}>{cardsListElem}</ul>;
}
