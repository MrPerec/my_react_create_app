import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import styles from './commentformcontrolled.css';
import { Icon } from '../Icon';
import { iconsList } from './constants';
import { userContext } from '../../context/UserContext';

interface ICommentFormProps {
  textareaRef?: React.RefObject<HTMLTextAreaElement | null>;
  authorName: string;
}

export function CommentFormControlled({ textareaRef, authorName }: ICommentFormProps) {
  const [value, setValue] = useState('');
  const userData = useContext(userContext);

  useEffect(() => {
    setValue(`${authorName}, `);
    if (textareaRef?.current) textareaRef.current.focus();
  }, [authorName]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
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

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        name={`textarea`}
        value={value}
        ref={textareaRef}
        onChange={handleChange}
        placeholder={`${userData.name}, оставьте ваш комментарий`}
      />
      <ul className={styles.iconsButtonsList}>{iconsButtons}</ul>
      <button className={styles.button} type='submit'>
        Комментировать
      </button>
    </form>
  );
}
