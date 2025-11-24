import React from 'react';
import styles from './textcontent.css';
import { IAuthor, IPost } from '../../../../hooks/usePostsData';
import formatRedditDate from '../../../../utils/js/formatRedditDate';

interface ITextContentProps {
  author: IAuthor;
  post: IPost;
}

export function TextContent({ author, post }: ITextContentProps) {
  const date = new Date(post.createdTime * 1000);
  const titleFormat = date.toUTCString();
  const dateTimeFormat = date.toISOString();
  const timeAgo = formatRedditDate(post.createdTime);

  return (
    <div className={styles.textContent}>
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
      <h2 className={styles.title}>
        <a className={styles.postLink} href={post.link} target='_blank'>
          {post.title}
        </a>
      </h2>
    </div>
  );
}
