import React from 'react';
import styles from './userlink.css';
import { IAuthor, IPost } from '../../../../../hooks/usePostsData';
import formatRedditDate from '../../../../../utils/js/formatRedditDate';

interface ITextContentProps {
  author: IAuthor;
  createdTime: number;
}

export function UserLink({ author, createdTime }: ITextContentProps) {
  const date = new Date(createdTime * 1000);
  const titleFormat = date.toUTCString();
  const dateTimeFormat = date.toISOString();
  const timeAgo = formatRedditDate(createdTime);

  return (
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img className={styles.avatar} src={author.avatarLink} alt='avatar' />
        <a className={styles.username} href={author.profilerLink} target='_blank'>
          {author.name}
        </a>
      </div>
      <span className={styles.createdAt}>
        <time title={titleFormat} dateTime={dateTimeFormat} className={styles.publishedLabel}>
          {timeAgo}
        </time>
      </span>
    </div>
  );
}
