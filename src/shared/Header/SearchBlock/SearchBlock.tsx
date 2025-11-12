import React from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import { useUserData } from '../../../hooks/useUserData';

// удалил проп token
export function SearchBlock() {
  // сделали кастомный хук и вынесли всю логику получения информации о пользователе в него
  // удалил проп token и сразу из хука useUserData получаем все данные для аватарки
  const [data] = useUserData();

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data?.iconImg} username={data?.name} />

      {/* searchInputBlock */}
      <div className={styles.searchInputBlock}>
        <svg className={styles.searchIcon} viewBox='0 0 11 11' xmlns='http://www.w3.org/2000/svg'>
          <path d='M7.86164 6.91824H7.36478L7.18868 6.74843C7.80503 6.03145 8.1761 5.10063 8.1761 4.08805C8.1761 1.83019 6.34591 0 4.08805 0C1.83019 0 0 1.83019 0 4.08805C0 6.34591 1.83019 8.1761 4.08805 8.1761C5.10063 8.1761 6.03145 7.80503 6.74843 7.18868L6.91824 7.36478V7.86164L10.0629 11L11 10.0629L7.86164 6.91824ZM4.08805 6.91824C2.52201 6.91824 1.25786 5.65409 1.25786 4.08805C1.25786 2.52201 2.52201 1.25786 4.08805 1.25786C5.65409 1.25786 6.91824 2.52201 6.91824 4.08805C6.91824 5.65409 5.65409 6.91824 4.08805 6.91824Z' />
        </svg>
        <input className={styles.searchInput} type='text' name='search' placeholder='Поиск' />
      </div>

      {/* emailIconsBlock */}
      <div className={styles.emailIconsBlock}>
        <span className={styles.emailCounterText}>4</span>
        <svg className={styles.emailCounterIcon} viewBox='0 0 13 11' xmlns='http://www.w3.org/2000/svg'>
          <path d='M11.7235 0.276367H1.51072C0.808598 0.276367 0.240514 0.850834 0.240514 1.55296L0.234131 9.21252C0.234131 9.91465 0.808598 10.4891 1.51072 10.4891H11.7235C12.4256 10.4891 13.0001 9.91465 13.0001 9.21252V1.55296C13.0001 0.850834 12.4256 0.276367 11.7235 0.276367ZM11.7235 2.82955L6.6171 6.02104L1.51072 2.82955V1.55296L6.6171 4.74444L11.7235 1.55296V2.82955Z' />
        </svg>
      </div>
    </div>
  );
}
