import React from 'react';
import { Text } from '../../../../shared/Text';
import { EColor } from '../../../../enum';
import { TPost } from '../../../../reducers/postReducer';
import { PictureImage } from '../../../../shared/PictureImage';
import { VideoPlayer } from '../../../../shared/VideoPlayer';

type TPostContentProps = {
  post: TPost;
};

export function PostContent({ post }: TPostContentProps) {
  const { selftext, preview, media } = post;

  let textElem;
  if (selftext) {
    textElem = (
      <Text As={'p'} size={14} color={EColor.black} lineHeightPercent={171}>
        {selftext}
      </Text>
    );
  }

  let pictureElems;
  if (preview?.enabled && preview?.images && preview.images.length > 0) {
    pictureElems = preview.images.map((item) => {
      return (
        <PictureImage
          key={item?.id}
          source={item?.source}
          resolutions={item?.resolutions}
        />
      );
    });
  }

  return (
    <>
      {textElem}
      {pictureElems}
      {media?.isVideo && <VideoPlayer videoData={media} />}
    </>
  );
}
