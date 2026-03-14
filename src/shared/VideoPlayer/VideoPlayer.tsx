import React from 'react';
import styles from './videoplayer.css';
import { TPostVideo } from '../../reducers/postReducer';
import { EColor } from '../../enum';
import { Text } from '../Text';

type VideoPlayerProps = {
  videoData: TPostVideo;
};

export function VideoPlayer({ videoData }: VideoPlayerProps) {
  const videoSrc = videoData.hlsUrl || videoData.url;

  return (
    <video
      className={styles.video}
      src={videoSrc}
      width={videoData.width || '100%'}
      height={videoData.height || 'auto'}
      poster={videoData.poster}
      controls
      autoPlay
    >
      <source src={videoData.hlsUrl} type="application/vnd.apple.mpegurl" />
      <source src={videoData.dashUrl} type="application/dash+xml" />
      <source src={videoData.url} type="video/mp4" />
      <Text As={'p'} size={14} color={EColor.black} lineHeightPercent={171}>
        Ваш браузер не поддерживает встроенные видео. Попробуйте скачать его по
        <a href={videoData?.dashUrl} target="_blank" rel="noreferrer">
          этой ссылке
        </a>
      </Text>
    </video>
  );
}
