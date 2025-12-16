import React, { FormEvent, useEffect, useRef } from 'react';
import styles from './commentformuncontrolled.css';
import { Icon } from '../Icon';
import { iconsList } from './constants';

export function CommentFormUncontrolled({ authorName }: { authorName: string }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef?.current) {
      textareaRef.current.value = `${authorName}, `;
      textareaRef.current.focus();
    }
  }, [authorName]);

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
      <textarea className={styles.input} ref={textareaRef} />
      <ul className={styles.iconsButtonsList}>{iconsButtons}</ul>
      <button className={styles.button} type='submit'>
        Комментировать
      </button>
    </form>
  );
}
