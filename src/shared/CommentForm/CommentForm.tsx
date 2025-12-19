import React, { ChangeEvent, FormEvent, useContext, useEffect } from 'react';
import styles from './commentform.css';
import { Icon } from '../Icon';
import { iconsList } from './constants';
import { userContext } from '../../context/UserContext';
// импортировали useStore для получения состояния из store redux
import { useDispatch, useSelector, useStore } from 'react-redux';
import { IComment, RootState, updateComment } from '../../store/store';

interface ICommentFormProps {
  textareaRef?: React.RefObject<HTMLTextAreaElement | null>;
  commentId: number;
  authorName: string;
}

export function CommentForm({ textareaRef, commentId, authorName }: ICommentFormProps) {
  const userData = useContext(userContext);

  /* получаем стор из redux store
    из стора берём какое-то конерктное состояние и записываем его в переменную 
  */
  // const store = useStore<RootState>();
  // const comment = store.getState().comment;

  /** Или более короткий вариант. Что бы не писать грамосткую конструкцию как в верху, можно получить отдельно comment при помощи селектора
   * Селекторы это ф-ии которые позваляют брать нужный кусочек состояния и работать уже с ним, для этого есть ф-я useSelector
   * 1й аргумент - принимает селектор т.е. ф-я из state которая возвращает нужный кусок состояния
   */
  const comment = useSelector<RootState, IComment[]>((state) => state.comment);

  useEffect(() => {
    /* setComment((prevState) => {
      return [...prevState, { id: commentId, value: `${authorName}, ` }];
    }); */

    if (textareaRef?.current) textareaRef.current.focus();
  }, [authorName, commentId]);

  /** что бы изменить комментарии т.е. изменять состояние нудно в redux передать action при помощи dispatch */
  const dispatch = useDispatch();

  /* перепишем handleChange на работту с action, вместо сеттеров для useState будем использовать dispatch где указываем action */
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>, index: number) => {
    // вызываем диспатч
    /* dispatch({
      type: 'UPDATE_COMMENT', // указываем action
      index,
      value: event.target.value,
    }); */

    //заменим вызов dispatch с указанием типа на вызов ф-ии actionCreator
    dispatch(updateComment(index, event.target.value));
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

  let commentIndex = comment.findIndex((element) => element.id === commentId);
  if (commentIndex < 1) commentIndex = 0;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        name={`textarea${commentId}`}
        value={comment[commentIndex].value}
        ref={textareaRef}
        onChange={(ev) => handleChange(ev, commentIndex)}
        placeholder={`${userData.name}, оставьте ваш комментарий`}
      />
      <ul className={styles.iconsButtonsList}>{iconsButtons}</ul>
      <button className={styles.button} type='submit'>
        Комментировать
      </button>
    </form>
  );
}
