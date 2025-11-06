import React from 'react';
import styles from './icon.css';
import classNames from 'classnames';
import { BlockIcon, WarningIcon, CommentsIcon, SaveIcon, ShareIcon } from '../Icons';
import { EColor, EIcons } from '../../enum';

interface IIconProps {
  name: EIcons;
  size?: number;
  mobileSize?: number;
  tabletSize?: number;
  desktopSize?: number;
  color?: EColor;
}

export function Icon({ name, size = 14, mobileSize, tabletSize, desktopSize, color = EColor.grey99 }: IIconProps) {
  const classes = classNames(
    styles[`s${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    styles[color],
  );

  let iconElem: React.ReactNode;
  switch (name) {
    case EIcons.block:
      iconElem = <BlockIcon />;
      break;
    case EIcons.warning:
      iconElem = <WarningIcon />;
      break;
    case EIcons.comments:
      iconElem = <CommentsIcon />;
      break;
    case EIcons.save:
      iconElem = <SaveIcon />;
      break;
    case EIcons.share:
      iconElem = <ShareIcon />;
      break;

    default:
      break;
  }

  return (
    <svg className={classes} xmlns='http://www.w3.org/2000/svg'>
      {iconElem}
    </svg>
  );
}
