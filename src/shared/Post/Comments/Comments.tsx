import React, { useRef, useState } from 'react';
import styles from './comments.css';
import { KarmaCounter } from '../../KarmaCounter';
import { UserLink } from '../../CardsList/Card/TextContent/UserLink';
import { EColor } from '../../../enum';
import { MenuItemsList } from '../../CardsList/Card/Menu/MenuItemsList';
import { Text } from '../../Text';
import { commentsMenuList } from '../constants';
import { IAuthor } from '../../../hooks/usePostsData';
import { Reply } from './Reply';
import { CommentForm } from '../../CommentForm';
import { CommentFormUncontrolled } from '../../CommentFormUncontrolled/CommentFormUncontrolled';

interface IComment {
  id: number;
  author: IAuthor;
  createdTime: number;
  text: string;
  replies?: IComment[];
}

function Comment({ comment }: { comment: IComment }) {
  const { author, createdTime, text, id } = comment;
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const commentRef = useRef<HTMLTextAreaElement>(null);

  let repliesElem;
  if (comment?.replies && comment.replies.length > 0) {
    repliesElem = comment.replies.map((reply) => {
      return <Comment key={id} comment={reply} />;
    });
  }

  const сommentsButtonsList = commentsMenuList.map((button) => {
    return {
      ...button,
      onClick: () => setIsReplyOpen(!isReplyOpen),
    };
  });

  const portalNameNode = `replyTo${id}Container`;

  return (
    <article className={styles.comment}>
      <div className={styles.counterBlock}>
        <KarmaCounter />
      </div>
      <div className={styles.commentBlock}>
        <div className={styles.commentTextWrapper}>
          <div className={styles.userLinkWrapper}>
            <UserLink author={author} createdTime={createdTime} isComment={true} />
          </div>
          <Text color={EColor.black} size={14} lineHeightPercent={171}>
            {text}
          </Text>
          <MenuItemsList list={сommentsButtonsList} isDirectionRow={true} textSize={{ size: 14 }} />
          <div id={portalNameNode}>
            {isReplyOpen && (
              <Reply portalNameNode={portalNameNode}>
                <CommentForm textareaRef={commentRef} commentId={id} authorName={author.name} />
              </Reply>
            )}
          </div>
        </div>
        {repliesElem}
      </div>
    </article>
  );
}

interface IComments {
  comments: IComment[];
}

export function Comments({ comments }: IComments) {
  const commentsItems = comments.map((comment) => {
    return (
      <li className={styles.commentItem} key={comment.author.name}>
        <Comment comment={comment} />
      </li>
    );
  });

  return <ul className={styles.commentsList}>{commentsItems}</ul>;
}
