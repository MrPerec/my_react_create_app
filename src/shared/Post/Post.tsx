import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom';
import { CommentForm } from '../CommentForm';
import { EColor, EIcons } from '../../enum';
import { Icon } from '../Icon';
import { KarmaCounter } from '../KarmaCounter';
import { TextContent } from '../CardsList/Card/TextContent';

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

  return ReactDOM.createPortal(
    <div className={styles.post} ref={postRef} style={{ top: `${topPosition}px` }}>
      <div className={styles.closeIconContainer} onClick={onClose}>
        <Icon name={EIcons.close} color={EColor.greyD9} size={21} />
      </div>
      <div className={styles.headerContainer}>
        <KarmaCounter karmaCount={311} />
        <TextContent author={fakeTitleData.author} post={fakeTitleData.post} />
      </div>
      <div className={styles.content}>
        <p>
          Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что
          иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно
          распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции
          однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в
          науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище,
          хотя само их существование приносит несомненную пользу обществу.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate libero, aliquam
          expedita atque beatae sapiente quibusdam corrupti ab officiis fuga. Veritatis asperiores
          dignissimos est nisi autem velit incidunt sequi repellat?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim adipisci ex natus ab
          quaerat molestiae deserunt atque cupiditate repellendus, cumque modi autem quos blanditiis
          alias iure eligendi! Recusandae, modi illo?
        </p>
      </div>
      <CommentForm />
    </div>,
    modalNode,
  );
}

/** fake data */
const fakeAuthorName = 'someName';

const fakeTitleData = {
  author: {
    avatarLink: `https://api.dicebear.com/7.x/avataaars/svg?seed=${fakeAuthorName}`,
    profilerLink: '#',
    name: fakeAuthorName,
  },
  post: {
    link: '#',
    title: 'Следует отметить, что новая модель организационной деятельности поможет',
    createdTime: 1765105483.0,
  },
};
