import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './post.css';
import { createPortal } from 'react-dom';
import { EColor, EIcons } from '../../enum';
import { Icon } from '../Icon';
import { KarmaCounter } from '../KarmaCounter';
import { TextContent } from '../CardsList/Card/TextContent';
import { MenuItemsList } from '../CardsList/Card/Menu/MenuItemsList';
import { postMenuList } from './constants';
import { Text } from '../Text';
import { SortButton } from '../SortButton';
import { PostContent } from './PostContent';
import { Comments } from './Comments';
import formatRedditDate from '../../utils/js/formatRedditDate';
import { Time } from '../Time';
import { CommentFormContainer } from '../CommentFormContainer';

interface IPostsProps {
  titleRef: React.RefObject<HTMLHeadingElement | null>;
  onClose?: () => void;
}

export function Post({ titleRef, onClose }: IPostsProps) {
  const postRef = useRef<HTMLDivElement>(null);
  const [topPosition, setTopPosition] = useState(0);

  useLayoutEffect(() => {
    if (titleRef?.current) {
      setTopPosition(titleRef.current.getBoundingClientRect().top + window.scrollY - 68);
    }
  }, [titleRef]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !postRef.current?.contains(event.target)) {
        onClose?.();
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  });

  const modalNode = document.querySelector('#modal_root');
  if (!modalNode) return null;

  return createPortal(
    <article className={styles.post} ref={postRef} style={{ top: `${topPosition}px` }}>
      <button className={styles.closeButton} onClick={onClose}>
        <Icon name={EIcons.close} color={EColor.greyD9} size={21} />
      </button>
      <div className={styles.headerContainer}>
        <KarmaCounter karmaCount={postData.karmaCount} />
        <TextContent author={postData.author} post={postData.post} />
      </div>
      <div className={styles.contentContainer}>
        <PostContent />
      </div>
      <div className={styles.postMenuItemsListContainer}>
        <MenuItemsList list={postMenuList} isDirectionRow={true} textSize={{ size: 14 }} />
        <Text color={EColor.grey99} size={14} lineHeightPercent={171}>
          {`${postData.votedPercent}% Проголосовали`}
        </Text>
      </div>
      <div className={styles.commentFormContainer}>
        <CommentFormContainer commentId={postData.id} />
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
    </article>,
    modalNode,
  );
}

/** fake post data */
const postData = {
  id: 12345,
  author: {
    avatarLink: `https://api.dicebear.com/7.x/avataaars/svg?seed=someName`,
    profilerLink: '#',
    name: 'someName',
  },
  post: {
    link: '#',
    title: 'Следует отметить, что новая модель организационной деятельности поможет',
    createdTime: 1765105483.0,
  },
  karmaCount: 311,
  hiddenCommentTime: 1765488808.0,
  votedPercent: 54,
  comments: [
    {
      id: 1,
      author: {
        avatarLink: `https://api.dicebear.com/7.x/avataaars/svg?seed=commentAuthor5`,
        profilerLink: '#',
        name: 'Михаил Рогов',
      },
      createdTime: 1765121113.0,
      text: 'Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно. ',
      replies: [
        {
          id: 11,
          author: {
            avatarLink: `https://api.dicebear.com/7.x/avataaars/svg?seed=commentAuthor6`,
            profilerLink: '#',
            name: 'Вика Салмина',
          },
          createdTime: 1765111413.0,
          text: 'Принимая во внимание показатели успешности, разбавленное изрядной долей эмпатии, рациональное мышление прекрасно подходит для реализации анализа существующих паттернов поведения. Равным образом, убеждённость некоторых оппонентов, в своём классическом представлении.',
          replies: [
            {
              id: 111,
              author: {
                avatarLink: `https://api.dicebear.com/7.x/avataaars/svg?seed=commentAuthor7`,
                profilerLink: '#',
                name: 'Зураб Желев',
              },
              createdTime: 1765111113.0,
              text: 'А также диаграммы связей неоднозначны и будут функционально разнесены на независимые элементы. Следует отметить, что начало повседневной работы по формированию позиции однозначно определяет каждого участника как способного принимать собственные решения.',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      author: {
        avatarLink: `https://api.dicebear.com/7.x/avataaars/svg?seed=commentAuthor1`,
        profilerLink: '#',
        name: 'Алексей Киняев',
      },
      createdTime: 1765105483.0,
      text: 'Безусловно, повышение уровня гражданского сознания однозначно фиксирует необходимость стандартных.',
    },
    {
      id: 3,
      author: {
        avatarLink: `https://api.dicebear.com/7.x/avataaars/svg?seed=commentAuthor2`,
        profilerLink: '#',
        name: 'Дмитрий Фёдоров',
      },
      createdTime: 1765105413.0,
      text: 'Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно. ',
    },
    {
      id: 4,
      author: {
        avatarLink: `https://api.dicebear.com/7.x/avataaars/svg?seed=commentAuthor3`,
        profilerLink: '#',
        name: 'Игорь Полищук',
      },
      createdTime: 1765105113.0,
      text: 'Но активно развивающиеся страны третьего мира своевременно верифицированы. В целом, конечно.',
      replies: [
        {
          id: 41,
          author: {
            avatarLink: `https://api.dicebear.com/7.x/avataaars/svg?seed=commentAuthor4`,
            profilerLink: '#',
            name: 'Денис Беликов',
          },
          createdTime: 1765101413.0,
          text: 'Новая модель организационной деятельности представляет собой интересный эксперимент проверки форм воздействия. Вот вам яркий пример современных тенденций - перспективное планирование способствует повышению качества кластеризации усилий. Внезапно, некоторые особенности внутренней политики.',
        },
      ],
    },
  ],
};
