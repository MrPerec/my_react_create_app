import React, { useContext } from 'react';
import styles from './emailblock.css';
import { Icon } from '../../../Icon';
import { EColor, EIcons } from '../../../../enum';
import { screenWidthContext } from '../../../context/screenWidthContext';

export function EmailBlock() {
  const screenWidth = useContext(screenWidthContext);

  let emailIconElem = <Icon name={EIcons.emailMobile} color={EColor.greyD9} mobileSize={'12x10'} />;
  if (screenWidth >= 1024) {
    emailIconElem = <Icon name={EIcons.email} color={EColor.greyD9} size={'20x16'} />;
  }

  return (
    <div className={styles.emailIconsBlock}>
      <span className={styles.emailCounterText}>4</span>
      {emailIconElem}
    </div>
  );
}
