import React from 'react';
import styles from './sortblock.css';
import { Icon } from '../../Icon';
import { EColor, EIcons } from '../../../enum';
import { SortButton } from '../../SortButton';

export function SortBlock() {
  return (
    <div className={styles.sortBlockContainer}>
      <Icon name={EIcons.rocket} color={EColor.orange} size={'14x16'} mobileSize={'9x11'} />
      <SortButton />
    </div>
  );
}
