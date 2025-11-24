import React from 'react';
import styles from './preview.css';
import { IPreview } from '../../../../hooks/usePostsData';

interface IPreviewProps {
  preview: IPreview;
}

export function Preview({ preview }: IPreviewProps) {
  const { imgLink, alt } = preview;

  let previewElem = <img className={styles.previewImg} src={imgLink} alt={alt} />;

  return <div className={styles.preview}>{previewElem}</div>;
}
