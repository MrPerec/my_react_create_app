import React from 'react';
import styles from './menuitemslist.css';
import { Text } from '../../../../Text';
import { Icon } from '../../../../Icon';
import { EColor, EIcons } from '../../../../../enum';

interface IMenuItemsListProps {
  list: {
    As?: 'li' | 'button' | 'div';
    id: number;
    text: string;
    icon: {
      name: EIcons;
      size?: number;
      mobileSize?: number;
      tabletSize?: number;
      desktopSize?: number;
      color?: EColor;
    };
  }[];
}

export function MenuItemsList({ list }: IMenuItemsListProps) {
  const resultList = list.map(({ As = 'li', text, id, icon }) => {
    return (
      <As className={styles.menuItem} key={id} onClick={() => console.log(id)}>
        <Icon
          name={icon.name}
          size={icon?.size}
          mobileSize={icon?.mobileSize}
          tabletSize={icon?.tabletSize}
          desktopSize={icon?.desktopSize}
          color={icon?.color}
        />
        <Text size={12} color={EColor.grey99}>
          {text}
        </Text>
      </As>
    );
  });

  return <ul className={styles.menuItemsList}>{resultList}</ul>;
}
