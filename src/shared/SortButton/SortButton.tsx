import React from 'react';
import styles from './sortbutton.css';
import { Icon } from '../Icon';
import { EColor, EIcons } from '../../enum';
import { Text, TSizesText } from '../Text';

interface ISortButton {
  size?: TSizesText;
}

export function SortButton({ size = 20 }: ISortButton) {
  return (
    <button className={styles.sortButtonContainer}>
      <Text color={EColor.orange} mobileSize={12} size={size}>
        Лучшие
      </Text>
      <Icon name={EIcons.collapse} color={EColor.orange} size={'14x8'} mobileSize={'10x6'} />
    </button>
  );
}
