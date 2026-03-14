import React from 'react';
import styles from './textcontent.css';
import { IAuthor, IPost } from '../../../../hooks/usePostsData';
import { Title } from './Title';
import { UserLink } from './UserLink';

interface ITextContentProps {
  author: IAuthor;
  post: IPost;
  postId?: string;
  isSourceLink?: boolean;
}

export function TextContent(props: ITextContentProps) {
  const { author, post, postId = '0', isSourceLink = false } = props;

  return (
    <div className={styles.textContent}>
      <UserLink author={author} createdTime={post.createdTime} />
      <Title title={post.title} postId={postId} link={isSourceLink ? post.link : ''} />
    </div>
  );
}
