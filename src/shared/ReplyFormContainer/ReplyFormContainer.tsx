import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentForm } from '../CommentForm/CommentForm';
import { addReply, updateComment } from '../../actions/commentsActions';
import { CommentsState } from '../../reducers/commentsReducer';
import { RootState } from '../../reducers/rootReducer';

interface IReplyFormContainerProps {
  textareaRef?: React.RefObject<HTMLTextAreaElement | null>;
  replyToName?: string;
  commentId: number;
}

export function ReplyFormContainer(props: IReplyFormContainerProps) {
  const { textareaRef, commentId, replyToName } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addReply(commentId, `${replyToName}, `));
    if (textareaRef?.current) textareaRef.current.focus();
  }, [commentId, replyToName]);

  const comment = useSelector<RootState, CommentsState>((state) => state.comments);
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
      textareaRef={textareaRef}
      textareaName={`textarea${commentId}`}
      replyToName={replyToName}
      textareaValue={comment[commentIndex].value}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
}
