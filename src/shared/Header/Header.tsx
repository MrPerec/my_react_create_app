import React from 'react';
import styles from './header.css';
import { SearchBlock } from './SearchBlock/SearchBlock';
import { ThreadTitle } from './ThreadTitle/ThreadTitle';
import { SortBlock } from './SortBlock/SortBlock';

/* Из <Header /> удалили получение token 
(пусть то Consumer или сразу из useContext(tokenContext)) и так же убарли передачу token 
через prop для <SearchBlock token={token} />
*/
export function Header() {
  return (
    <header className={styles.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}
