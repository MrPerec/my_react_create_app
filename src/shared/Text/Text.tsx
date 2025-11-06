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

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div'; // все возможные теги обёртки текста
  children?: React.ReactNode; // дочерний эл-т
  size: TSizes; // размер шрифта
  mobileSize?: TSizes; // размер шрифта мобильного адаптива
  tabletSize?: TSizes; // размер шрифта планшетного адаптива
  desktopSize?: TSizes; // размер шрифта десктопного адаптива
  color?: EColor; // все возможные цвета
  bold?: boolean; // жирный шрифт
}

export function Text(props: ITextProps) {
  const { As = 'span', children, size, mobileSize, tabletSize, desktopSize, color = EColor.black, bold = false } = props;

  const classes = classNames(
    styles[`s${size}`], // размер шрифта
    { [styles[`m${mobileSize}`]]: mobileSize }, // для адаптива мобильного, если в mobileSize что-то есть то сгенерирует этот класс
    { [styles[`t${tabletSize}`]]: tabletSize }, // для адаптива планшета, если в tabletSize что-то есть то сгенерирует этот класс
    { [styles[`d${desktopSize}`]]: desktopSize }, // для адаптива десктопа, если в desktopSize что-то есть то сгенерирует этот класс
    styles[color], // цвет, условие как в предыдущем примере, не обязательно т.к. по умолчанию false
    { [styles.bold]: bold }, // толщина шрифта, если в bold что-то есть то сгенерирует этот класс
  );

  return <As className={classes}>{children}</As>;
}
