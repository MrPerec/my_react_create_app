import React, { useState, useEffect } from 'react';
import styles from './menu.css';
import { DropDown } from '../../../DropDown';
import { Text } from '../../../Text';
import { MenuItemsList } from './MenuItemsList';
import { EColor } from '../../../../enum';
import { MenuIcon } from '../../../Icons';
import { menuList } from './MenuItemsList/constants';

export function Menu(): React.JSX.Element {
  let windowInnerWidth: number = 320;
  if (typeof window !== 'undefined') windowInnerWidth = window.innerWidth;

  const [screenWidth, setScreenWidth] = useState(windowInnerWidth);

  useEffect(() => {
    const changeWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', changeWidth);
    return () => window.removeEventListener('resize', changeWidth);
  }, []);

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
