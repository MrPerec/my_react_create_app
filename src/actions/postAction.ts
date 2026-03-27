import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { TPostData } from '../reducers/postReducer';
import { TRootState } from '../reducers/rootReducer';
import axios from 'axios';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';

export type TPostRquestAction = {
  type: typeof POST_REQUEST;
};

export type TPostRquestSuccessAction = {
  type: typeof POST_REQUEST_SUCCESS;
  payload: { data: TPostData };
};

export type TPostRquestErrorAction = {
  type: typeof POST_REQUEST_ERROR;
  payload: { error: string };
};

export const postRequest: ActionCreator<TPostRquestAction> = () => ({
  type: POST_REQUEST,
});

export const postRequestSuccess: ActionCreator<TPostRquestSuccessAction> = (
  data: TPostData,
) => ({
  type: POST_REQUEST_SUCCESS,
  payload: { data },
});

export const postRequestError: ActionCreator<TPostRquestErrorAction> = (
  error: string,
) => ({
  type: POST_REQUEST_ERROR,
  payload: { error },
});

// async thunk
export const postRequestAsync =
  (postId: string): ThunkAction<void, TRootState, unknown, Action<string>> =>
  (dispatch, getState) => {
    dispatch(postRequest());

    axios
      .get(`https://oauth.reddit.com/by_id/t3_${postId}`, {
        headers: { Authorization: `bearer ${getState().token}` },
      })
      .then(({ data }) => {
        const {
          title,
          author,
          score,
          permalink,
          created_utc,
          id,
          selftext,
          is_video,
          media,
          preview,
          media_metadata,
        } = data.data.children[0].data;

        let videoData;
        if (is_video && media) {
          const { height, width, fallback_url, dash_url, hls_url } =
            media.reddit_video;

          videoData = {
            isVideo: is_video,
            height,
            width,
            poster: preview?.images[0]?.source.url?.replace(/&amp;/g, '&'),
            url: fallback_url.replace(/&amp;/g, '&'),
            dashUrl: dash_url.replace(/&amp;/g, '&'),
            hlsUrl: hls_url.replace(/&amp;/g, '&'),
          };
        }

        let postPreview = preview;

        if (!postPreview && media_metadata) {
          const images = Object.values(media_metadata).map((item: any) => ({
            source: {
              url: item.s.u.replace(/&/g, '&'),
              width: item.s.x,
              height: item.s.y,
            },
            resolutions: item.p.map((res: any) => ({
              url: res.u.replace(/&/g, '&'),
              width: res.x,
              height: res.y,
            })),
            variants: {},
            id: item.id,
          }));

          postPreview = {
            images,
            enabled: true,
          };
        }

        const post = {
          id: id,
          author: {
            avatarLink: `https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`,
            profilerLink: `https://www.reddit.com/user/${author}`,
            name: author,
          },
          post: {
            link: `https://oauth.reddit.com${permalink}`,
            title: title,
            createdTime: created_utc,
            selftext,
            preview: postPreview,
            media: videoData,
          },
          karmaCount: score,
        };

        dispatch(postRequestSuccess(post));
      })
      .catch((error) => {
        console.log(error);
        dispatch(postRequestError(String(error)));
      });
  };
