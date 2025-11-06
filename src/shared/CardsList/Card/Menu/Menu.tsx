import React, { useState, useEffect } from 'react';
import styles from './menu.css';
import { DropDown } from '../../../DropDown';
import { Text } from '../../../Text';
import { MenuItemsList } from './MenuItemsList';
import { EColor, EIcons } from '../../../../enum';
import { MenuIcon } from '../../../Icons';

export function Menu(): React.JSX.Element {
  const MENU_LIST = [
    { postId: `1`, As: 'li' as const, text: `Комментарии`, icon: { name: EIcons.comments, size: 15 } }, // tablet/desktop:14.17
    { postId: `2`, As: 'li' as const, text: `Поделиться`, icon: { name: EIcons.share, size: 14 } }, // tablet/desktop:12x14
    { postId: `3`, isMobile: true, As: 'li' as const, text: `Скрыть`, icon: { name: EIcons.block, size: 14, mobileSize: 12 } }, // mobile:12, tablet:14x12, desktop:14
    { postId: `4`, As: 'li' as const, text: `Сохранить`, icon: { name: EIcons.save, size: 14 } }, // tablet/desktop:14
    { postId: `5`, isMobile: true, As: 'li' as const, text: `Пожаловаться`, icon: { name: EIcons.warning, size: 16, mobileSize: 14 } }, // mobile:14x12, tablet/desktop:16x14
  ];

  let windowInnerWidth: number = 320;
  if (typeof window !== 'undefined') windowInnerWidth = window.innerWidth;

  const [screenWidth, setScreenWidth] = useState(windowInnerWidth);

  useEffect(() => {
    const changeWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', changeWidth);
    return () => window.removeEventListener('resize', changeWidth);
  }, []);

  let menuList = MENU_LIST.filter((item) => item?.isMobile);
  let closeBtn: React.ReactNode = (
    <button className={styles.closeButton}>
      <Text size={14} mobileSize={12} color={EColor.grey66}>
        Закрыть
      </Text>
    </button>
  );

  if (screenWidth >= 1024) menuList = MENU_LIST.map((item) => item);
  if (screenWidth >= 1540) closeBtn = null;

  const menuBtn: React.ReactNode = (
    <button className={styles.menuButton}>
      <MenuIcon />
    </button>
  );

  return (
    <div className={styles.menu}>
      <DropDown button={menuBtn}>
        <div className={styles.dropdown}>
          <MenuItemsList list={menuList} />
          {closeBtn}
        </div>
      </DropDown>
    </div>
  );
}
