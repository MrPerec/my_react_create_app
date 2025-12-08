import React from 'react';
import styles from './sortblock.css';
import { Icon } from '../../Icon';
import { EColor, EIcons } from '../../../enum';

export function SortBlock() {
  return (
    <div className={styles.sortBlock}>
      <div className={styles.sortTextBlock}>
        <Icon name={EIcons.rocket} color={EColor.orange} size={'14x16'} mobileSize={'9x11'} />
        <span className={styles.sortText}>Лучшие</span>
      </div>
      <button className={styles.sortButton}>
        <Icon name={EIcons.collapse} color={EColor.orange} size={'14x8'} mobileSize={'10x6'} />
      </button>
    </div>
  );
}
