import React, { useContext } from 'react';
import styles from './menu.css';
import { DropDown } from '../../../DropDown';
import { Text } from '../../../Text';
import { MenuItemsList } from './MenuItemsList';
import { EColor, EIcons } from '../../../../enum';
import { menuList } from './MenuItemsList/constants';
import { screenWidthContext } from '../../../../context/ScreenWidthContext';
import { Icon } from '../../../Icon';

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
      <Icon name={EIcons.menu} color={EColor.greyC4} size={20} />
    </button>
  );

  return (
    <div className={styles.menuContainer}>
      <DropDown button={menuBtn}>
        <div className={styles.menuMenuItemsListContainer}>
          <MenuItemsList list={menuListCurrent} textSize={{ size: 14 }} />
        </div>
        {closeBtn}
      </DropDown>
    </div>
  );
}
