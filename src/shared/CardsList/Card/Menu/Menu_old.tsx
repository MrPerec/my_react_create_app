import React, { useState, useEffect } from 'react';
import styles from './menu_old.css';
import { DropDown } from '../../../DropDown';
import { GenericList } from '../../../GenericList/GenericList';
import { CommentsIcon, WarningIcon, ShareIcon, BlockIcon, SaveIcon } from '../../../Icons';

export function MenuOld(): React.JSX.Element {
  const MENU_LIST = [
    { id: `1`, className: 'menuListItem', As: 'li' as const, text: `Комментарии`, icon: <CommentsIcon /> },
    { id: `2`, className: 'menuListItem', As: 'li' as const, text: `Поделиться`, icon: <ShareIcon /> },
    { id: `3_mobile`, className: 'menuListItem', As: 'li' as const, text: `Скрыть`, icon: <BlockIcon /> },
    { id: `4`, className: 'menuListItem', As: 'li' as const, text: `Сохранить`, icon: <SaveIcon /> },
    { id: `5_mobile`, className: 'menuListItem', As: 'li' as const, text: `Пожаловаться`, icon: <WarningIcon /> },
    { id: `6_mobile`, className: 'menuListItem', As: 'li' as const, text: `Закрыть` },
  ];

  let windowInnerWidth = 320;
  if (typeof window !== 'undefined') windowInnerWidth = window.innerWidth;

  const [screenWidth, setScreenWidth] = useState(windowInnerWidth);

  useEffect(() => {
    const changeWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', changeWidth);
    return () => window.removeEventListener('resize', changeWidth);
  }, []);

  let menuList = MENU_LIST.filter((item) => item.id.includes('mobile'));
  if (screenWidth >= 1024) menuList = MENU_LIST.map((item) => item);

  const menuBtn = (
    <button className={styles.menuButton}>
      <svg width='5' height='20' viewBox='0 0 5 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='2.5' cy='2.5' r='2.5' fill='#D9D9D9' />
        <circle cx='2.5' cy='10' r='2.5' fill='#D9D9D9' />
        <circle cx='2.5' cy='17.5' r='2.5' fill='#D9D9D9' />
      </svg>
    </button>
  );

  return (
    <div className={styles.menu}>
      <DropDown button={menuBtn}>
        <ul className={styles.menuList}>
          <GenericList list={menuList} />
        </ul>
      </DropDown>
    </div>
  );
}
