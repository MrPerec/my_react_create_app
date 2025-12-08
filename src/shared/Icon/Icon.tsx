import React from 'react';
import styles from './icon.css';
import classNames from 'classnames';
import { EColor, EIcons } from '../../enum';
import {
  BlockIcon,
  WarningIcon,
  CommentsIcon,
  SaveIcon,
  ShareIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ShareCircleIcon,
  SaveCircleIcon,
  MenuIcon,
  AnonIcon,
  EmailIcon,
  EmailIconMobile,
  SearchIcon,
  RocketIcon,
  CollapseIcon,
  CloseIcon,
} from '../Icons';

type TSizes = number | string;

interface IIconProps {
  name: EIcons;
  size?: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
}

export function Icon(props: IIconProps) {
  const { name, size = 14, mobileSize, tabletSize, desktopSize, color = EColor.greyC4 } = props;

  const classes = classNames(
    styles[`s${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    styles[color],
  );

  let iconElem: React.ReactNode;
  let viewBox: string = '0 0 14 14';

  switch (name) {
    case EIcons.block:
      iconElem = <BlockIcon />;
      viewBox = '0 0 14 14';
      break;

    case EIcons.warning:
      iconElem = <WarningIcon />;
      viewBox = '0 0 16 14';
      break;

    case EIcons.comments:
      iconElem = <CommentsIcon />;
      viewBox = '0 0 15 15';
      break;

    case EIcons.save:
      iconElem = <SaveIcon />;
      viewBox = '0 0 14 14';
      break;

    case EIcons.share:
      iconElem = <ShareIcon />;
      viewBox = '0 0 12 14';
      break;

    case EIcons.arrowUp:
      iconElem = <ArrowUpIcon />;
      viewBox = '0 0 19 10';
      break;

    case EIcons.arrowDown:
      iconElem = <ArrowDownIcon />;
      viewBox = '0 0 19 10';
      break;

    case EIcons.shareCircle:
      iconElem = <ShareCircleIcon />;
      viewBox = '0 0 20 20';
      break;

    case EIcons.saveCircle:
      iconElem = <SaveCircleIcon />;
      viewBox = '0 0 20 20';
      break;

    case EIcons.menu:
      iconElem = <MenuIcon />;
      viewBox = '0 0 5 20';
      break;

    case EIcons.anon:
      iconElem = <AnonIcon />;
      viewBox = '0 0 50 50';
      break;

    case EIcons.email:
      iconElem = <EmailIcon />;
      viewBox = '0 0 20 16';
      break;

    case EIcons.emailMobile:
      iconElem = <EmailIconMobile />;
      viewBox = '0 0 12.77 10.21';
      break;

    case EIcons.search:
      iconElem = <SearchIcon />;
      viewBox = '0 0 19 19';
      break;

    case EIcons.rocket:
      iconElem = <RocketIcon />;
      viewBox = '0 0 9 11';
      break;

    case EIcons.collapse:
      iconElem = <CollapseIcon />;
      viewBox = '0 0 10 6';
      break;

    case EIcons.close:
      iconElem = <CloseIcon />;
      viewBox = '0 0 21 21';
      break;

    default:
      break;
  }

  return (
    <svg className={classes} viewBox={viewBox} xmlns='http://www.w3.org/2000/svg'>
      {iconElem}
    </svg>
  );
}
