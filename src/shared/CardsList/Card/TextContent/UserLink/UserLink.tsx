import React from 'react';
import styles from './userlink.css';
import { IAuthor } from '../../../../../hooks/usePostsData';
import formatRedditDate from '../../../../../utils/js/formatRedditDate';
import { Time } from '../../../../Time';
import { EColor } from '../../../../../enum';
import { Text } from '../../../../Text';

interface ITextContentProps {
  author: IAuthor;
  createdTime: number;
  isComment?: boolean;
}

export function UserLink({ author, createdTime, isComment = false }: ITextContentProps) {
  let timeWrapperStyles = styles.timeWrapper;
  if (isComment) timeWrapperStyles = `${timeWrapperStyles} ${styles.timeWrapperComment}`;

  return (
    <div className={styles.metaData}>
      <img className={styles.avatar} src={author.avatarLink} alt={`Аватар автора ${author.name}`} />
      <a className={styles.username} href={author.profilerLink} target='_blank'>
        {author.name}
      </a>
      <div className={timeWrapperStyles}>
        <Time timestamp={createdTime}>
          <Text color={EColor.grey99} size={14} mobileSize={10}>
            {formatRedditDate(createdTime)}
          </Text>
        </Time>
      </div>
    </div>
  );
}
