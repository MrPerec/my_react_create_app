import React, { ChangeEvent, FormEvent, useState } from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

import styles from './commentformmobx.css';
import { Button } from '../Button';

class Comment {
  value = 'Hello MobX';

  /* это придется писать каждый раз, это назвается 
  BollerPlate - код который нужно писать каждый раз и он не несёт полезной бизнес-логики */
  constructor() {
    makeAutoObservable(this);
  }

  // добавим экшен обновления Value
  updateValue(newValue: string) {
    this.value = newValue;
  }
}

// создадим переменную для store. Инстанцируем
const myComment = new Comment();

/* что бы компонент мог следить на всеми наболюдаемыми в данный момент пропсами 
нужно обернуть её в декортаор observer */
export const CommentFormMobX = observer(() => {
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
    // заменяем на
    myComment.updateValue(event.target.value);
  };

  function validateValue() {
    // if (value.length <= 3) return 'Введите больше 3х символов';
    // заменяем на
    if (myComment.value.length <= 3) return 'Введите больше 3х символов';
    return '';
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor='textarea'>CommentFormControlled</label>
      <textarea
        className={styles.input}
        name='textarea'
        // value={value}
        // заменяем на
        value={myComment.value}
        onChange={handleChange}
        aria-invalid={valueError ? 'true' : undefined}
      />
      {touched && valueError && <div>{valueError}</div>}
      <Button text='Комментировать' type='submit' />
    </form>
  );
});
