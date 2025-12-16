/**
 * Часто повторяющиеся шрифты:
 *
 * font-size:28px;
 * line-height:33px;
 *
 * font-size:20px;
 * line-height:23px;
 *
 * font-size:16px;
 * line-height:19px;
 *
 * font-size:14px;
 * line-height:16px;
 *
 * font-size:12px;
 * line-height:14px;
 *
 * font-size:10px;
 * line-height:12px;
 *
 * Часто встречаются в элементах:
 * span, h1, h2, h3, h4, p, div;
 *
 * Всего цветов:
 * colors: 10;
 */

import React from 'react';
import styles from './text.css';
import classNames from 'classnames';
import { EColor } from '../../enum';

export type TSizesText = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size: TSizesText;
  mobileSize?: TSizesText;
  tabletSize?: TSizesText;
  desktopSize?: TSizesText;
  color?: EColor;
  bold?: boolean;
  lineHeightPercent?: 171 | 167;
}

export function Text(props: ITextProps) {
  const {
    As = 'span',
    children,
    size,
    mobileSize,
    tabletSize,
    desktopSize,
    color = EColor.black,
    bold = false,
    lineHeightPercent,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    styles[color],
    { [styles.bold]: bold },
    styles[`lh${lineHeightPercent}`],
  );

  return <As className={classes}>{children}</As>;
}
