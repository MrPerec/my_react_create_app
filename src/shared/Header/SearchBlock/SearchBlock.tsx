import React from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import { useUserData } from '../../../hooks/useUserData';
import { SearchInputBlock } from './SearchInputBlock';
import { EmailBlock } from './EmailBlock';

// удалил проп token
export function SearchBlock() {
  // сделали кастомный хук и вынесли всю логику получения информации о пользователе в него
  // удалил проп token и сразу из хука useUserData получаем все данные для аватарки
  const [data] = useUserData();

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data?.iconImg} username={data?.name} />
      <SearchInputBlock />
      <EmailBlock />
    </div>
  );
}
