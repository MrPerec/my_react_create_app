import React, { ChangeEvent, FormEvent } from 'react';
import styles from './commentform.css';
import { Icon } from '../Icon';
import { iconsList } from './constants';

interface ICommentFormProps {
  textareaRef?: React.RefObject<HTMLTextAreaElement | null>;
  userName?: string;
  replyToName?: string;
  textareaName: string;
  textareaValue: string;
  handleSubmit: (event: FormEvent) => void;
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function CommentForm(props: ICommentFormProps) {
  const { textareaRef, userName, textareaName, textareaValue, handleSubmit, handleChange } = props;

  const iconsButtons = iconsList.map(({ id, name, color, size }) => {
    return (
      <li className={styles.iconsButtonItem} key={id}>
        <button className={styles.iconButton}>
          <Icon name={name} color={color} size={size} />
        </button>
      </li>
    );
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        name={textareaName}
        value={textareaValue}
        ref={textareaRef}
        onChange={(ev) => handleChange(ev)}
        placeholder={`${userName}, оставьте ваш комментарий`}
      />
      <ul className={styles.iconsButtonsList}>{iconsButtons}</ul>
      <button className={styles.button} type='submit'>
        Комментировать
      </button>
    </form>
  );
}
