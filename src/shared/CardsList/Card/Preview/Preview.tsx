import React from 'react';
import styles from './preview.css';
import { IPreview } from '../../../../hooks/usePostsData';

interface IPreviewProps {
  preview: IPreview;
}

export function Preview({ preview }: IPreviewProps) {
  const { imgLink, alt } = preview;

  return <img className={styles.previewImg} src={imgLink} alt={alt} />;
}
