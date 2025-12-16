import React from 'react';
import styles from './image.css';
import classNames from 'classnames';

export type TWidthSizes = 840 | 410 | 267;
export type THeightSizes = 495 | 300 | 195;

interface IImage {
  src: string;
  alt: string;
  width: TWidthSizes;
  height: THeightSizes;
  children?: string;
}

export function Image({ src, alt, width, height, children }: IImage) {
  const classes = classNames(styles[`w${width}`], styles[`h${height}`]);

  return (
    <figure className={`${styles.imageFigure} ${classes}`}>
      <img className={styles.imageImg} src={src} alt={alt} width={width} height={height} />
      {children && <figcaption className={styles.imageFigcaption}>{children}</figcaption>}
    </figure>
  );
}
