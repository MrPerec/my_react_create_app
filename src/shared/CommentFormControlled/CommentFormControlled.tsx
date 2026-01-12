import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './commentformcontrolled.css';

export function CommentFormControlled() {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const [valueError, setValueError] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTouched(true);
    setValueError(validateValue());

    const isFormValid = !validateValue();
    if (!isFormValid) return;

    alert('Форма отправлена!');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  function validateValue() {
    if (value.length <= 3) return 'Введите больше 3х символов';
    return '';
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        value={value}
        onChange={handleChange}
        aria-invalid={valueError ? 'true' : undefined}
      />
      {touched && valueError && <div>{valueError}</div>}
      <button className={styles.button} type='submit'>
        Комментировать
      </button>
    </form>
  );
}
