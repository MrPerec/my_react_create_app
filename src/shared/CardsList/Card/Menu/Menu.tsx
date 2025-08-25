import React, { useState, useEffect } from 'react';
import styles from './menu.css';
import { DropDown } from '../../../DropDown';
// import { GenericList } from '../../../GenericList/GenericList';

import { MenuIcon } from '../../../Icons/MenuIcon';
// import { CommentsIcon } from '../../../Icons/CommentsIcon';
// import { WarningIcon } from '../../../Icons/WarningIcon';
// import { ShareIcon } from '../../../Icons/ShareIcon';
// import { BlockIcon } from '../../../Icons/BlockIcon';
// import { SaveIcon } from '../../../Icons/SaveIcon';

import { EColor, Text } from '../../../Text';
import { MenuItemsList } from './MenuItemsList';

/* const MENU_LIST = [
  { id: `1`, className: 'menuListItem', As: 'li' as const, text: `Комментарии`, icon: <CommentsIcon /> },
  { id: `2`, className: 'menuListItem', As: 'li' as const, text: `Поделиться`, icon: <ShareIcon /> },
  { id: `3_mobile`, className: 'menuListItem', As: 'li' as const, text: `Скрыть`, icon: <HiddenIcon /> },
  { id: `4`, className: 'menuListItem', As: 'li' as const, text: `Сохранить`, icon: <SaveIcon /> },
  { id: `5_mobile`, className: 'menuListItem', As: 'li' as const, text: `Пожаловаться`, icon: <ComplainIcon /> },
  { id: `6_mobile`, className: 'menuListItem', As: 'li' as const, text: `Закрыть` },
]; */

export function Menu(): React.JSX.Element {
  /* let windowInnerWidth = 320;
  if (typeof window !== 'undefined') windowInnerWidth = window.innerWidth;

  const [screenWidth, setScreenWidth] = useState(windowInnerWidth);

  useEffect(() => {
    const changeWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', changeWidth);
    return () => window.removeEventListener('resize', changeWidth);
  }, []); */

  // let menuList = MENU_LIST.filter((item) => item.id.includes('mobile'));
  // if (screenWidth >= 1024) menuList = MENU_LIST.map((item) => item);

  const menuBtn = (
    <button className={styles.menuButton}>
      <MenuIcon />
    </button>
  );

  return (
    <div className={styles.menu}>
      <DropDown button={menuBtn}>
        <div className={styles.dropdown}>
          <MenuItemsList postId={'1'} />
          <button className={styles.closeButton}>
            <Text size={14} mobileSize={12} color={EColor.grey66}>
              Закрыть
            </Text>
          </button>
        </div>
      </DropDown>

      {/* <DropDown button={menuBtn}>
        <ul className={styles.menuList}>
          <GenericList list={menuList} />
        </ul>
      </DropDown> */}
    </div>
  );
}
