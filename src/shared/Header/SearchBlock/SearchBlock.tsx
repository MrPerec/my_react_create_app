import React, { useContext } from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import { SearchInputBlock } from './SearchInputBlock';
import { EmailBlock } from './EmailBlock';
import { userContext } from '../../context/UserContext';

export function SearchBlock() {
  const { iconImg, name } = useContext(userContext);

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImg} username={name} />
      <SearchInputBlock />
      <EmailBlock />
    </div>
  );
}
