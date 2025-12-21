import React, { ChangeEvent, FormEvent, useContext, useEffect } from 'react';
import { userContext } from '../../context/UserContext';
import { useDispatch, useSelector } from 'react-redux';
import { IComment, RootState, updateComment } from '../../store/store';
import { CommentForm } from '../CommentForm/CommentForm';

interface ICommentFormContainerProps {
  commentId: number;
}

export function CommentFormContainer({ commentId }: ICommentFormContainerProps) {
  const userData = useContext(userContext);
  const comment = useSelector<RootState, IComment[]>((state) => state.comment);
  const dispatch = useDispatch();

  let commentIndex = comment.findIndex((element) => element.id === commentId);
  if (commentIndex < 1) commentIndex = 0;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateComment(commentIndex, event.target.value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <CommentForm
      textareaName={`textarea${commentId}`}
      userName={userData.name}
      textareaValue={comment[commentIndex].value}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
}
