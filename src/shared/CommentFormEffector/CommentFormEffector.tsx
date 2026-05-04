import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './commentformeffector.css';
import { Button } from '../Button';

import { useStore } from 'effector-react';
import { createEvent, createStore } from 'effector';
// import { useStore } from 'react-redux';

// событие (event)
const updateComment = createEvent<string>();

// store начинается с $ и задаём начальное значение
// через .on задаем экшен
const $comment = createStore('Hello Effector!').on(updateComment, (_, newValue) => newValue);

export function CommentFormEffector() {
  // const [value, setValue] = useState('');
  // подписываемся на store effector
  const value = useStore($comment);

  const [touched, setTouched] = useState(false);
  const [valueError, setValueError] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTouched(true);
    setValueError(validateValue());

    if (validateValue()) return;
    alert('Форма отправлена!');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    // setValue(event.target.value);
    // что бы изменить значение вызываем событие
    updateComment(event.target.value);
  };

  function validateValue() {
    if (value.length <= 3) return 'Введите больше 3х символов';
    return '';
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor='textarea'>CommentFormEffector</label>
      <textarea
        className={styles.input}
        name='textarea'
        value={value}
        onChange={handleChange}
        aria-invalid={valueError ? 'true' : undefined}
      />
      {touched && valueError && <div>{valueError}</div>}
      <Button text='Комментировать' type='submit' />
    </form>
  );
}
