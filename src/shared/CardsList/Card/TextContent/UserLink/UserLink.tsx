import React, { useContext } from 'react';
import styles from './userlink.css';
import { IAuthor } from '../../../../../hooks/usePostsData';
import formatRedditDate from '../../../../../utils/js/formatRedditDate';
import { screenWidthContext } from '../../../../context/screenWidthContext';

interface ITextContentProps {
  author: IAuthor;
  createdTime: number;
}

export function UserLink({ author, createdTime }: ITextContentProps) {
  const screenWidth = useContext(screenWidthContext);

  const date = new Date(createdTime * 1000);
  const titleFormat = date.toUTCString();
  const dateTimeFormat = date.toISOString();

  let timeAgo = formatRedditDate(createdTime);
  if (screenWidth >= 1024) timeAgo = `опубликовано ${timeAgo}`;

  return (
    <div className={styles.metaData}>
      <img className={styles.avatar} src={author.avatarLink} alt='avatar' />
      <a className={styles.username} href={author.profilerLink} target='_blank'>
        {author.name}
      </a>
      <time title={titleFormat} dateTime={dateTimeFormat} className={styles.publishedLabel}>
        {timeAgo}
      </time>
    </div>
  );
}
