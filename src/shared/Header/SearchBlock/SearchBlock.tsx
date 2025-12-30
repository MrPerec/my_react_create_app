import React from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import { SearchInputBlock } from './SearchInputBlock';
import { EmailBlock } from './EmailBlock';
import { useUserData } from '../../../hooks/useUserData';

export function SearchBlock() {
  const { userData, loading } = useUserData();

  return (
    <div className={styles.searchBlock}>
      <UserBlock iconImg={userData.iconImg} name={userData.name} loading={loading} />
      <SearchInputBlock />
      <EmailBlock />
    </div>
  );
}
