import React from 'react';
import styles from './time.css';

interface ITimeProps {
  timestamp: number;
  children?: React.ReactNode;
}

export function Time({ timestamp, children }: ITimeProps) {
  const date = new Date(timestamp * 1000);
  const titleFormat = date.toUTCString();
  const dateTimeFormat = date.toISOString();

  return (
    <time className={styles.time} title={titleFormat} dateTime={dateTimeFormat}>
      {children}
    </time>
  );
}
