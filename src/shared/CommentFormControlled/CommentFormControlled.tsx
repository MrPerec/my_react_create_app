import React, { ChangeEvent, FormEvent, useContext, useEffect } from 'react';
import styles from './commentformcontrolled.css';
import { Icon } from '../Icon';
import { iconsList } from './constants';
import { userContext } from '../../context/UserContext';
import { commentContext } from '../../context/CommentContext';

interface ICommentFormProps {
  textareaRef?: React.RefObject<HTMLTextAreaElement | null>;
  commentId: number;
  authorName: string;
}

export function CommentFormControlled({ textareaRef, commentId, authorName }: ICommentFormProps) {
  const { comment, setComment } = useContext(commentContext);
  const userData = useContext(userContext);

  const uniqueCommentName = `${authorName}${commentId}Textarea`;

  useEffect(() => {
    setComment((prevState) => {
      return [...prevState, { name: uniqueCommentName, value: `${authorName}, ` }];
    });

    if (textareaRef?.current) textareaRef.current.focus();
  }, [authorName, uniqueCommentName]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>, index: number) => {
    const { value } = event.target;

    setComment((prev) => {
      prev[index].value = value;
      return [...prev];
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

  let commentIndex = comment.findIndex((element) => element.name === uniqueCommentName);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        name={comment[commentIndex]?.name || 'textarea'}
        value={comment[commentIndex]?.value || ''}
        ref={textareaRef}
        onChange={(ev) => handleChange(ev, commentIndex)}
        placeholder={`${userData.name}, оставьте ваш комментарий`}
      />
      <ul className={styles.iconsButtonsList}>{iconsButtons}</ul>
      <button className={styles.button} type='submit'>
        Комментировать
      </button>
    </form>
  );
}
