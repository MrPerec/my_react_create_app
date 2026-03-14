import { Reducer } from 'redux';
import {
  POST_REQUEST,
  POST_REQUEST_ERROR,
  POST_REQUEST_SUCCESS,
  TPostRquestAction,
  TPostRquestErrorAction,
  TPostRquestSuccessAction,
} from '../actions/postAction';
import { IAuthor } from '../hooks/usePostsData';

type TPostActions =
  | TPostRquestAction
  | TPostRquestSuccessAction
  | TPostRquestErrorAction;

export type TPostImage = {
  url: string;
  width?: number;
  height?: number;
};

export type TPostVideo = {
  isVideo: boolean;
  height: number;
  width: number;
  url: string;
  dashUrl: string;
  hlsUrl: string;
  poster: string;
};

export type TPost = {
  link: string;
  title: string;
  createdTime: number;
  selftext: string;
  thumbnail: string;
  preview: {
    images: [
      {
        source: TPostImage;
        resolutions: TPostImage[];
        variants: {};
        id: string;
      },
    ];
    enabled: boolean;
  };
  media: TPostVideo;
};

export type TPostData = {
  id: string;
  author: IAuthor;
  post: TPost;
  karmaCount: number;
};

export type TPostState = {
  loading: boolean;
  error: string;
  data: TPostData;
};

const initialPostState: TPostState = {
  loading: false,
  error: '',
  data: {
    id: '0',
    author: {
      avatarLink: ``,
      profilerLink: '#',
      name: '',
    },
    post: {
      link: '#',
      title: '',
      createdTime: 0,
      selftext: '',
      thumbnail: '',
      preview: {
        images: [
          {
            source: {
              url: '',
              width: 0,
              height: 0,
            },
            resolutions: [
              {
                url: '',
                width: 0,
                height: 0,
              },
            ],
            variants: {},
            id: '',
          },
        ],
        enabled: false,
      },
      media: {
        isVideo: false,
        height: 0,
        width: 0,
        url: '',
        dashUrl: '',
        hlsUrl: '',
        poster: '',
      },
    },
    karmaCount: 0,
  },
};

export const postReducer: Reducer<TPostState, TPostActions> = (
  state = initialPostState,
  action,
) => {
  switch (action?.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload?.data,
      };

    case POST_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload?.error,
      };

    default:
      return state;
  }
};
