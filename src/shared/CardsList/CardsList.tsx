import React, { useContext, useEffect, useRef } from 'react';
import styles from './cardslist.css';

import { Card } from './Card/Card';
import { postsContext } from '../../context/PostsContext';
import { IPostData } from '../../hooks/usePostsData';

export function CardsList() {
  const { postsData, loading, errorLoading, loadPosts } = useContext(postsContext);
  // получим ссылку на эл-те на котором ловим пересечение
  // const [postsData] = usePostsData();
  const bottomOfList = useRef<HTMLLIElement>(null);

  // создадим  useEffect который будет вызываться каждый раз когда этот компонент монтируется (пустой список зависимостей)
  useEffect(() => {
    // внутри создаем observer c конструктором IntersectionObserver
    // в котором будет callback который вызывается при пересечении объекта который создали
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadPosts();
      },
      // 2м аргументом указываем опцию rootMargin (их всего 3, см. док-ю) которая указывает насколько раньше мы как бы увидим root элемент с которым пересекаемся
      { rootMargin: '100px' },
    );

    // вызываем наблюдение
    if (bottomOfList?.current) observer.observe(bottomOfList.current);

    // делаем отписку от зависимости
    return () => {
      if (bottomOfList?.current) observer.unobserve(bottomOfList.current);
    };
  }, [bottomOfList.current, loadPosts]);

  let cardsListText = 'Список пуст';
  if (loading) cardsListText = 'Загрузка...';
  if (errorLoading) cardsListText = errorLoading;

  let cardsListElem = null;

  if (postsData.length) {
    const cardsItems = postsData.map((postData: IPostData) => {
      return <Card key={postData?.id} cardData={postData} />;
    });

    cardsListElem = <>{cardsItems}</>;
  }

  return (
    <ul className={styles.cardsList}>
      {cardsListElem}
      <li style={{ margin: '0 auto' }}>{cardsListText}</li>
      {/* создадим элемент на котором будем ловить пересечение */}
      <li ref={bottomOfList}></li>
    </ul>
  );
}
