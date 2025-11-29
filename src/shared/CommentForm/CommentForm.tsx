import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';
import styles from './commentform.css';
import { userContext } from '../context/UserContext';
import { commentContext } from '../context/commentContext';

export function CommentForm() {
  // убираем старый стэйт
  // const [textAreaValue, setTextAreaValue] = useState('');

  // добавили получение комментариев и ф-ю для их изминения из контекста
  const { value, onChange } = useContext(commentContext);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    // setTextAreaValue(event.target.value);
    onChange(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* <textarea className={styles.input} value={textAreaValue} onChange={handleChange} /> */}
      <textarea className={styles.input} value={value} onChange={handleChange} />
      <button type='submit' className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}
