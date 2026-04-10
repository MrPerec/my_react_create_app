import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

import { TRootState } from '../../reducers/rootReducer';
import { TPostState } from '../../reducers/postReducer';
import { LoaderSpinner } from '../../shared/LoaderSpinner';
import { PopupOverlay } from '../../shared/PopupOverlay';

import { Post } from './Post/Post';

export function PostContainer() {
  const postRef = useRef<HTMLDivElement>(null);
  const { data, loading } = useSelector<TRootState, TPostState>((state) => state.post);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !postRef.current?.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  });

  const history = useHistory();

  const onClose = () => {
    history.push('./');
  };

  const modalNode = document.querySelector('#modal_root');
  if (!modalNode) return null;

  let modalElem = (
    <div ref={postRef}>
      <Post data={data} onClose={() => onClose()} />;
    </div>
  );
  if (loading) modalElem = <LoaderSpinner />;

  return createPortal(<PopupOverlay>{modalElem}</PopupOverlay>, modalNode);
}
