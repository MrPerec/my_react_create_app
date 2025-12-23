import React, { ChangeEvent, FormEvent, useContext, useEffect } from 'react';
import styles from './commentformcontrolled.css';
import { Icon } from '../Icon';
import { iconsList } from './constants';
import { userContext } from '../../context/UserContext';
import { ADD_COMMENT, commentContext, EDIT_COMMENT } from '../../context/CommentContext';

interface ICommentFormProps {
  textareaRef?: React.RefObject<HTMLTextAreaElement | null>;
  commentId: number;
  replyToName?: string;
}

export function CommentFormControlled(props: ICommentFormProps) {
  const { textareaRef, commentId, replyToName } = props;

  const { comment, dispatch } = useContext(commentContext);
  const userData = useContext(userContext);

  useEffect(() => {
    if (replyToName) {
      // dispatcher
      dispatch({
        type: ADD_COMMENT, // action
        id: commentId,
        value: `${replyToName}, `,
      });
    }

    if (textareaRef?.current) textareaRef.current.focus();
  }, [replyToName, commentId]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>, commentId: number) => {
    const { value } = event.target;

    // dispatcher
    dispatch({
      type: EDIT_COMMENT, // action
      id: commentId,
      value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const iconsButtons = iconsList.map(({ id, name, color, size }) => {
    return (
      <li className={styles.iconsButtonItem} key={id}>
        <button className={styles.iconButton}>
          <Icon name={name} color={color} size={size} />
        </button>
      </li>
    );
  });

  let commentIndex = comment.findIndex((element) => element.id === commentId);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        name={`textarea${commentId}`}
        value={comment[commentIndex]?.value}
        ref={textareaRef}
        onChange={(ev) => handleChange(ev, commentId)}
        placeholder={`${userData.name}, оставьте ваш комментарий`}
      />
      <ul className={styles.iconsButtonsList}>{iconsButtons}</ul>
      <button className={styles.button} type='submit'>
        Комментировать
      </button>
    </form>
  );
}
