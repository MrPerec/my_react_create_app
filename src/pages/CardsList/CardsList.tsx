import React, { useContext, useEffect, useRef } from 'react';
import styles from './cardslist.css';

import { Card } from './Card/Card';
import { postsContext } from '../../context/PostsContext';
import { IPostData } from '../../hooks/usePostsData';
import { Button } from '../../shared/Button';
import { LoaderSpinner } from '../../shared/LoaderSpinner';
import { PopupOverlay } from '../../shared/PopupOverlay';

export function CardsList() {
  const { postsData, loading, loadingCount, errorLoading, loadPosts } = useContext(postsContext);
  const bottomOfList = useRef<HTMLLIElement>(null);
  const LOAD_COUNT = 3;

  const isShowButton = loadingCount > 0 && loadingCount % LOAD_COUNT === 0;

  useEffect(() => {
    if (isShowButton) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!errorLoading && entries[0].isIntersecting) loadPosts();
      },
      { rootMargin: '100px' },
    );

    if (bottomOfList?.current) observer.observe(bottomOfList.current);

    return () => {
      if (bottomOfList?.current) observer.unobserve(bottomOfList.current);
    };
  }, [bottomOfList.current, loadPosts, isShowButton, errorLoading]);

  let lastCardsListContent: string | React.ReactElement = 'Список пуст';

  if (isShowButton) {
    lastCardsListContent = <Button text='Загрузить ещё' onClickCallback={() => loadPosts()} />;
  }

  if (errorLoading) lastCardsListContent = errorLoading;

  if (loading) {
    lastCardsListContent = (
      <PopupOverlay>
        <LoaderSpinner />
      </PopupOverlay>
    );
  }

  let cardsListElem = null;

  if (postsData.length) {
    const cardsItems = postsData.map((postData: IPostData) => {
      return <Card key={postData?.id} cardData={postData} />;
    });

    cardsListElem = <>{cardsItems}</>;
  }

  return (
    <div className={styles.cardsListContainer}>
      <ul className={styles.cardsList}>
        {cardsListElem}
        <li ref={bottomOfList} style={{ margin: '0 auto' }}>
          {lastCardsListContent}
        </li>
      </ul>
    </div>
  );
}
