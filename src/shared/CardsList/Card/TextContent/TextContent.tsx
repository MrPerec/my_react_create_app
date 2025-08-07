import React from 'react';
import styles from './textcontent.css';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar} src='https://cdn.dribbble.com/users/2173663/avatars/small/c4c633361e233ae7e0b9882264c95b1a.jpg?1579775888' alt='avatar' />
          <a className={styles.username} href='#user-url'>
            Дмитрий Гришин
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>4 часа назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a className={styles.postLink} href='#post-url'>
          Реализация намеченных плановых заданий
        </a>
      </h2>
    </div>
  );
}
