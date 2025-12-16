import React from 'react';
import styles from './menuitemslist.css';
import { Text, TSizesText } from '../../../../Text';
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
    onClick?: () => void;
  }[];
  textSize: {
    size: TSizesText;
    mobileSize?: TSizesText;
  };
  isDirectionRow?: boolean;
}

export function MenuItemsList(props: IMenuItemsListProps) {
  const { list, textSize, isDirectionRow = false } = props;
  const { size, mobileSize = 12 } = textSize;

  const resultList = list.map(({ As = 'li', text, id, icon, onClick = () => console.log(id) }) => {
    return (
      <As
        className={`${styles.menuItem} ${!isDirectionRow && styles.menuItemColumn}`}
        key={id}
        onClick={onClick}>
        <Icon
          name={icon.name}
          size={icon?.size}
          mobileSize={icon?.mobileSize}
          tabletSize={icon?.tabletSize}
          desktopSize={icon?.desktopSize}
          color={icon?.color}
        />
        <Text size={size} mobileSize={mobileSize} color={EColor.grey99}>
          {text}
        </Text>
      </As>
    );
  });

  return (
    <ul
      className={`${styles.menuItemsList} ${
        isDirectionRow ? styles.menuItemsListRow : styles.menuItemsListColumn
      }`}>
      {resultList}
    </ul>
  );
}
