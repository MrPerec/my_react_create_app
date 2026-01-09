import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './commentformcontrolled.css';

export function CommentFormControlled() {
  const [value, setValue] = useState('');
  const [valueTouched, setValueTouched] = useState(false);
  const [valueError, setValueError] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        value={value}
        onChange={handleChange}
        aria-invalid={valueError ? 'true' : undefined}
      />
      <button className={styles.button} type='submit'>
        Комментировать
      </button>
    </form>
  );
}
