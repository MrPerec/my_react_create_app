import React from 'react';
import styles from './controls.css';
import { EColor, EIcons } from '../../../../enum';
import { Icon } from '../../../Icon';

interface IControlsProps {
  karmaCount: number;
  commentsCount: number;
}

export function Controls({ karmaCount, commentsCount }: IControlsProps) {
  return (
    <div className={styles.controls}>
      <div className={styles.karmaCounter}>
        <button className={styles.buttonUp}>
          <Icon name={EIcons.arrowUp} color={EColor.greyC4} size={'19x10'} />
        </button>
        <span className={styles.karmaValue}>{karmaCount}</span>
        <button className={styles.buttomDown}>
          <Icon name={EIcons.arrowDown} color={EColor.greyC4} size={'19x10'} />
        </button>
      </div>

      <button className={styles.commentsButton}>
        <Icon name={EIcons.comments} color={EColor.greyC4} size={15} />
        <span className={styles.commentsNumber}>{commentsCount}</span>
      </button>

      <div className={styles.actions}>
        <button className={styles.shareButton}>
          <Icon name={EIcons.shareCircle} color={EColor.greyC4} size={20} />
        </button>
        <button className={styles.saveButton}>
          <Icon name={EIcons.saveCircle} color={EColor.greyC4} size={20} />
        </button>
      </div>
    </div>
  );
}
