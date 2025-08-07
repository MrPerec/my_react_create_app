import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src='https://cdn.dribbble.com/userupload/44351197/file/2d18d3220ba497acb596e730b16e8cb0.png?format=webp&resize=320x240&vertical=center'
        alt='Psychological diary & AI-powered self-reflection app ai ai design app app design application diary mobile mobile app mobile design outcrowd product design ui uiux ux ux design'
      />
    </div>
  );
}
