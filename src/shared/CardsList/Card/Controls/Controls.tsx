import React from 'react';
import styles from './controls.css';
import { ArrowUpIcon, ArrowDownIcon, SaveCircleIcon, ShareCircleIcon } from '../../../Icons';
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
        <button className={styles.up}>
          <ArrowUpIcon />
        </button>
        <span className={styles.karmaValue}>{karmaCount}</span>
        <button className={styles.up}>
          <ArrowDownIcon />
        </button>
      </div>

      <button className={styles.commentsButton}>
        <Icon name={EIcons.comments} color={EColor.greyC4} size={15} />
        <span className={styles.commentsNumber}>{commentsCount}</span>
      </button>

      <div className={styles.actions}>
        <button className={styles.shareButton}>
          <ShareCircleIcon />
        </button>
        <button className={styles.saveButton}>
          <SaveCircleIcon />
        </button>
      </div>
    </div>
  );
}
