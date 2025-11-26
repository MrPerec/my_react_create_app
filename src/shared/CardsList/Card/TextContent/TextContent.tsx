import React from 'react';
import styles from './textcontent.css';
import { IAuthor, IPost } from '../../../../hooks/usePostsData';
import { Title } from './Title';
import { UserLink } from './UserLink';

interface ITextContentProps {
  author: IAuthor;
  post: IPost;
}

export function TextContent({ author, post }: ITextContentProps) {
  return (
    <div className={styles.textContent}>
      <UserLink author={author} createdTime={post.createdTime} />
      <Title link={post.link} title={post.title} />
    </div>
  );
}
