import React, { useContext } from 'react';
import styles from './menu.css';
import { DropDown } from '../../../DropDown';
import { Text } from '../../../Text';
import { MenuItemsList } from './MenuItemsList';
import { EColor } from '../../../../enum';
import { MenuIcon } from '../../../Icons';
import { menuList } from './MenuItemsList/constants';
import { screenWidthContext } from '../../../context/screenWidthContext';

export function Menu(): React.JSX.Element {
  const screenWidth = useContext(screenWidthContext);

  let menuListCurrent = menuList.filter((item) => item?.isMobile);
  let closeBtn: React.ReactNode = (
    <button className={styles.closeButton}>
      <Text size={14} mobileSize={12} color={EColor.grey66}>
        Закрыть
      </Text>
    </button>
  );

  if (screenWidth >= 1024) menuListCurrent = menuList.map((item) => item);
  if (screenWidth >= 1540) closeBtn = null;

  const menuBtn: React.ReactNode = (
    <button className={styles.menuButton}>
      <MenuIcon />
    </button>
  );

  return (
    <div className={styles.menuContainer}>
      <DropDown button={menuBtn}>
        <MenuItemsList list={menuListCurrent} />
        {closeBtn}
      </DropDown>
    </div>
  );
}
