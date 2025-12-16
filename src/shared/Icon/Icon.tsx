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
  SearchIcon,
  RocketIcon,
  CollapseIcon,
  CloseIcon,
  PdfIcon,
  FontIcon,
  PersonIcon,
  PenIcon,
  ChatIcon,
  VoiceIcon,
  LinkIcon,
  RefreshIcon,
  DownloadIcon,
  DocumentIcon,
  PictureIcon,
  QuoteIcon,
  PlusCircleIcon,
} from '../Icons';

export type TSizesIcon = number | string;

interface IIconProps {
  name: EIcons;
  size?: TSizesIcon;
  mobileSize?: TSizesIcon;
  tabletSize?: TSizesIcon;
  desktopSize?: TSizesIcon;
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

  const iconData: Record<EIcons, { icon: React.ReactNode; viewBox?: string }> = {
    [EIcons.block]: { icon: <BlockIcon />, viewBox: '0 0 14 14' },
    [EIcons.warning]: { icon: <WarningIcon />, viewBox: '0 0 16 14' },
    [EIcons.comments]: { icon: <CommentsIcon />, viewBox: '0 0 15 15' },
    [EIcons.save]: { icon: <SaveIcon />, viewBox: '0 0 14 14' },
    [EIcons.share]: { icon: <ShareIcon />, viewBox: '0 0 12 14' },
    [EIcons.arrowUp]: { icon: <ArrowUpIcon />, viewBox: '0 0 19 10' },
    [EIcons.arrowDown]: { icon: <ArrowDownIcon />, viewBox: '0 0 19 10' },
    [EIcons.shareCircle]: { icon: <ShareCircleIcon />, viewBox: '0 0 20 20' },
    [EIcons.saveCircle]: { icon: <SaveCircleIcon />, viewBox: '0 0 20 20' },
    [EIcons.menu]: { icon: <MenuIcon />, viewBox: '0 0 5 20' },
    [EIcons.anon]: { icon: <AnonIcon />, viewBox: '0 0 50 50' },
    [EIcons.email]: { icon: <EmailIcon />, viewBox: '0 0 20 16' },
    [EIcons.search]: { icon: <SearchIcon />, viewBox: '0 0 19 19' },
    [EIcons.rocket]: { icon: <RocketIcon />, viewBox: '0 0 9 11' },
    [EIcons.collapse]: { icon: <CollapseIcon />, viewBox: '0 0 10 6' },
    [EIcons.close]: { icon: <CloseIcon />, viewBox: '0 0 21 21' },
    [EIcons.pdf]: { icon: <PdfIcon />, viewBox: '0 0 20 20' },
    [EIcons.font]: { icon: <FontIcon />, viewBox: '0 0 16 18' },
    [EIcons.pen]: { icon: <PenIcon />, viewBox: '0 0 18 18' },
    [EIcons.chat]: { icon: <ChatIcon />, viewBox: '0 0 20 20' },
    [EIcons.voice]: { icon: <VoiceIcon />, viewBox: '0 0 20 18' },
    [EIcons.link]: { icon: <LinkIcon />, viewBox: '0 0 20 10' },
    [EIcons.refresh]: { icon: <RefreshIcon />, viewBox: '0 0 22 16' },
    [EIcons.person]: { icon: <PersonIcon />, viewBox: '0 0 18 18' },
    [EIcons.download]: { icon: <DownloadIcon />, viewBox: '0 0 14 17' },
    [EIcons.document]: { icon: <DocumentIcon />, viewBox: '0 0 16 20' },
    [EIcons.picture]: { icon: <PictureIcon />, viewBox: '0 0 18 18' },
    [EIcons.quote]: { icon: <QuoteIcon />, viewBox: '0 0 20 12' },
    [EIcons.plusCircle]: { icon: <PlusCircleIcon />, viewBox: '0 0 19 19' },
  };

  if (!iconData[name]) return null;
  const { icon, viewBox } = iconData[name];

  return (
    <svg className={classes} viewBox={viewBox} xmlns='http://www.w3.org/2000/svg'>
      {icon}
    </svg>
  );
}
