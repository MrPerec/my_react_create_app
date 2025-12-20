import React from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import { SearchInputBlock } from './SearchInputBlock';
import { EmailBlock } from './EmailBlock';

export function SearchBlock() {
  return (
    <div className={styles.searchBlock}>
      <UserBlock />
      <SearchInputBlock />
      <EmailBlock />
    </div>
  );
}
