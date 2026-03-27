import React from 'react';
import styles from './preview.css';
import { IPreview } from '../../../../hooks/usePostsData';
import { Icon } from '../../../../shared/Icon';
import { EColor, EIcons } from '../../../../enum';

interface IPreviewProps {
  preview: IPreview;
}

export function Preview({ preview }: IPreviewProps) {
  const { imgLink, alt, isVideo } = preview;

  return (
    <div className={styles.previewContainer}>
      {isVideo && (
        <div className={styles.previewOverlayContainer}>
          <Icon name={EIcons.video} color={EColor.black} size={'100'} />
        </div>
      )}
      <img className={styles.previewImg} src={imgLink} alt={alt} />
    </div>
  );
}
