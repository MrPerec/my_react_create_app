import React from 'react';
import styles from './searchinputblock.css';
import { Icon } from '../../../Icon';
import { EColor, EIcons } from '../../../../enum';

export function SearchInputBlock() {
  return (
    <div className={styles.searchInputBlock}>
      <Icon name={EIcons.search} color={EColor.greyC4} size={19} mobileSize={11} />
      <input className={styles.searchInput} type='text' name='search' placeholder='Поиск' />
    </div>
  );
}
