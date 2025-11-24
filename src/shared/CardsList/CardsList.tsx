import React, { useContext } from 'react';
import styles from './cardslist.css';

import { Card } from './Card/Card';
import { postsContext } from '../context/PostsContext';
import { IPostData } from '../../hooks/usePostsData';

export function CardsList() {
  const postsData = useContext(postsContext);
  let cardsListElem = null;

  if (postsData.length) {
    const cardsItems = postsData.map((postData: IPostData, index) => {
      return <Card key={`${postData?.id}${index}`} cardData={postData} />;
    });

    cardsListElem = <ul className={styles.cardsList}>{cardsItems}</ul>;
  }

  return cardsListElem;
}
