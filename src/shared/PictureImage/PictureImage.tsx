import React from 'react';
import styles from './pictureimage.css';
import { TPostImage } from '../../reducers/postReducer';

type TPictureImageProps = {
  source: TPostImage;
  resolutions?: TPostImage[];
  alt?: string;
};

export function PictureImage(props: TPictureImageProps) {
  const { source, resolutions, alt = '' } = props;
  let sourcesElems;

  if (resolutions && resolutions.length > 0) {
    sourcesElems = resolutions.map(({ url, width }, index) => {
      return (
        <source
          key={url + index}
          media={`(max-width: ${width}px)`}
          srcSet={url.replace(/&amp;/g, '&')}
        />
      );
    });
  }

  return (
    <picture className={styles.imageContainer}>
      {sourcesElems}
      <img
        className={styles.image}
        src={source.url.replace(/&amp;/g, '&')}
        alt={alt}
      />
    </picture>
  );
}
