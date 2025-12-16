import React from 'react';
import styles from './emailblock.css';
import { Icon } from '../../../Icon';
import { EColor, EIcons } from '../../../../enum';

export function EmailBlock() {
  return (
    <div className={styles.emailIconsBlock}>
      <span className={styles.emailCounterText}>4</span>
      <Icon name={EIcons.email} color={EColor.greyD9} size={'20x16'} mobileSize={'12x10'} />
    </div>
  );
}
