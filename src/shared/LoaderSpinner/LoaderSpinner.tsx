import React, { useEffect } from 'react';
import styles from './loaderspinner.css';

export function LoaderSpinner() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  });

  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loader}></span>
    </div>
  );
}
