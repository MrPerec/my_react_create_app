import React, { useEffect } from 'react';

import { Icon } from '../../../shared/Icon';
import { KarmaCounter } from '../../../shared/KarmaCounter';
import { TextContent } from '../../CardsList/Card/TextContent';
import { MenuItemsList } from '../../CardsList/Card/Menu/MenuItemsList';
import { Text } from '../../../shared/Text';
import { SortButton } from '../../../shared/SortButton';
import { PostContent } from './PostContent';
import { Comments } from './Comments';
import { Time } from '../../../shared/Time';
import { CommentFormContainer } from '../../../shared/CommentFormContainer';

import styles from './post.css';
import { EColor, EIcons } from '../../../enum';
import { postMenuList, postData } from './constants';
import { TPostData } from '../../../reducers/postReducer';
import formatRedditDate from '../../../utils/js/formatRedditDate';

type TPostProps = {
  data: TPostData;
  onClose: () => void;
};

export function Post({ data, onClose }: TPostProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  });

  return (
    <article className={styles.post}>
      <button className={styles.closeButton} onClick={onClose}>
        <Icon name={EIcons.close} color={EColor.greyD9} size={21} />
      </button>
      <div className={styles.headerContainer}>
        <KarmaCounter karmaCount={data.karmaCount} />
        <TextContent
          author={data.author}
          post={data.post}
          isSourceLink={true}
        />
      </div>
      <div className={styles.contentContainer}>
        <PostContent post={data.post} />
      </div>
      <div className={styles.postMenuItemsListContainer}>
        <MenuItemsList
          list={postMenuList}
          isDirectionRow={true}
          textSize={{ size: 14 }}
        />
        <Text color={EColor.grey99} size={14} lineHeightPercent={171}>
          {`${postData.votedPercent}% Проголосовали`}
        </Text>
      </div>
      <div className={styles.commentFormContainer}>
        <CommentFormContainer commentId={Number(data.id)} />
      </div>
      <div className={styles.postSortContainer}>
        <Text color={EColor.grey99} size={14}>
          Сортировать по:
        </Text>
        <SortButton size={14} />
      </div>
      <div className={styles.commentsContainer}>
        <Comments comments={postData.comments} />
      </div>
      <div className={styles.hiddenComment}>
        <button className={styles.addButton}>
          <Icon name={EIcons.plusCircle} color={EColor.orange} size={20} />
        </button>
        <Text color={EColor.grey99} size={14}>
          {'Комментарий был скрыт модератором '}
          <Time timestamp={postData.hiddenCommentTime}>
            <Text color={EColor.grey99} size={14}>
              {formatRedditDate(postData.hiddenCommentTime)}
            </Text>
          </Time>
        </Text>
      </div>
    </article>
  );
}
