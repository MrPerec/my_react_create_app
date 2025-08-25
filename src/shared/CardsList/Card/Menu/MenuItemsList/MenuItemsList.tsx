import React from 'react';
import styles from './menuitemslist.css';
import { WarningIcon } from '../../../../Icons/WarningIcon';
import { BlockIcon } from '../../../../Icons/BlockIcon';
import { Text, EColor } from '../../../../Text';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <BlockIcon />
        <Text size={12} color={EColor.grey99}>
          Скрыть
        </Text>
      </li>
      <li className={styles.menuItem}>
        <WarningIcon />
        <Text size={12} color={EColor.grey99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}
