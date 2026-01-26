import React from 'react';
import styles from './commentformreacthookform.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../Button';

type Inputs = {
  exampleTextarea: string;
};

export function CommentFormReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted, isSubmitSuccessful },
  } = useForm<Inputs>();

  // наш собственный хэнндлер для обработки
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log(data);
    alert('Форма отправлена!');
  };

  // Отслеживайте значение поля ввода, передав его имя.
  // console.log(watch('exampleTextarea'));

  const isShowError: boolean = Boolean(isSubmitted && !isSubmitSuccessful);

  return (
    /* Функция `handleSubmit` проверит введенные данные перед вызовом функции `onSubmit`. */
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {/* Включить проверку с использованием обязательных или других стандартных правил проверки HTML. */}
      <label htmlFor='exampleTextarea'>CommentFormReactHookForm</label>
      <textarea
        className={styles.input}
        {...register('exampleTextarea', {
          required: true,
          // minLength: 4,
          minLength: {
            value: 4,
            message: 'Введите больше 3х символов',
          },
        })}
        aria-invalid={isShowError ? 'true' : undefined}
      />
      {/* При сбое проверки полей будут возвращаться ошибки. */}
      {/* {isShowError && <span>Введите больше 3х символов</span>} */}
      {isShowError && <span>{errors?.exampleTextarea?.message}</span>}
      {/* <button className={styles.button} type='submit'>
        Комментировать
      </button> */}
      <Button text='Комментировать' type='submit' />
    </form>
  );
}
