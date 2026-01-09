import React, { ChangeEvent, FormEvent /* , useContext  */ } from 'react';
// import { userContext } from '../../context/UserContext';
import { useDispatch, useSelector } from 'react-redux';
import { CommentForm } from '../CommentForm/CommentForm';
import { updateComment } from '../../actions/commentsActions';
import { RootState } from '../../reducers/rootReducer';
import { CommentsState } from '../../reducers/commentsReducer';
import { useUserData } from '../../hooks/useUserData';

interface ICommentFormContainerProps {
  commentId: number;
}

export function CommentFormContainer({ commentId }: ICommentFormContainerProps) {
  // const userData = useContext(userContext);
  const { data } = useUserData();

  const comment = useSelector<RootState, CommentsState>((state) => state.comments);

  let commentIndex = comment.findIndex((element) => element.id === commentId);
  if (commentIndex < 1) commentIndex = 0;

  const dispatch = useDispatch();
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateComment(commentIndex, event.target.value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <CommentForm
      textareaName={`textarea${commentId}`}
      userName={data.name}
      textareaValue={comment[commentIndex].value}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
}
