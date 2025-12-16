import React from 'react';
import styles from './karmacounter.css';
import { Icon } from '../Icon';
import { EColor, EIcons } from '../../enum';

interface IKarmaCounterProps {
  karmaCount?: number;
}

export function KarmaCounter({ karmaCount }: IKarmaCounterProps) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.karmaCounter}>
        <button className={styles.buttonUp}>
          <Icon name={EIcons.arrowUp} color={EColor.greyC4} size={'19x10'} />
        </button>
        {karmaCount && <span className={styles.karmaValue}>{karmaCount}</span>}
        <button className={styles.buttomDown}>
          <Icon name={EIcons.arrowDown} color={EColor.greyC4} size={'19x10'} />
        </button>
      </div>
    </div>
  );
}
