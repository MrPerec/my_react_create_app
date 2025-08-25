import React from 'react';
import styles from './icons.css';

export function MenuIcon(): React.JSX.Element {
  return (
    <svg className={styles.menuIcon} viewBox='0 0 5 20' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='2.5' cy='2.5' r='2.5' />
      <circle cx='2.5' cy='10' r='2.5' />
      <circle cx='2.5' cy='17.5' r='2.5' />
    </svg>
  );
}
