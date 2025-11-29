import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import styles from './commentform.css';

/** получение value в "неуправляемом компоненты" */
/* export function CommentForm() {
  // через useRef получаем значение value из тега textarea
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(event: FormEvent) {
    // отменяем событие перезагрузки странице при нажатии на кнопку submit которое вызывается по умолчанию
    event.preventDefault();
    // выводим значение textarea по нажатию на submit
    console.log(textAreaRef.current?.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} ref={textAreaRef} />
      <button type='submit' className={styles.button}>
        Комментировать
      </button>
    </form>
  );
} */

/** получение value в "управляемом компоненте" */
export function CommentForm() {
  const [textAreaValue, setTextAreaValue] = useState('');

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTextAreaValue(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(textAreaValue);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={textAreaValue} onChange={handleChange} />
      <button type='submit' className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}
