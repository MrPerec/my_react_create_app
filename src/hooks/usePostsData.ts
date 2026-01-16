import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/rootReducer';
import { tokenState } from '../reducers/tokenReducer';

export interface IAuthor {
  avatarLink: string;
  profilerLink: string;
  name: string;
}
export interface IPost {
  link: string;
  title: string;
  createdTime: number;
}
export interface IPreview {
  imgLink: string;
  videoLink: string;
  alt: string;
  isVideo: boolean;
}

export interface IPostData {
  id: string;
  author: IAuthor;
  post: IPost;
  preview: IPreview;
  karmaCount: number;
  commentsCount: number;
  loading: boolean;
}

export interface IUsePostsData {
  postsData: IPostData[];
  loading: boolean;
  errorLoading: string;
}

interface IFetchPostsData {
  readonly data: {
    readonly id: string;
    readonly title: string;
    readonly author: string;
    readonly num_comments: number;
    readonly score: number;
    readonly permalink: string;
    readonly created_utc: string;
    readonly thumbnail: string;
    readonly preview: {
      images: [
        {
          source: { url: string };
        },
      ];
    };
  };
}

// export function usePostsData(): [IPostData[]] {
export function usePostsData(): [IUsePostsData] {
  const [postsData, setPostsData] = useState<IPostData[]>([]);
  const [loading, setLoading] = useState<boolean>(false); // можно назвать isLoading, panding, isPanding, fetching, isFetching...
  const [errorLoading, setErrorLoading] = useState<string>('');

  const token = useSelector<RootState, tokenState>((state) => state.token);

  useEffect(() => {
    // что бы эта ф-я не мусорила в scope и не была видна в других местах лучше объявлять её внутри useEffect
    async function loadPosts(tokenParam: tokenState) {
      setLoading(true);
      setErrorLoading('');

      try {
        const { data } = await axios.get('https://oauth.reddit.com/r/all/top', {
          headers: { Authorization: `bearer ${tokenParam}` },
        });

        if (data?.data?.children.length > 0) {
          const posts = data.data.children.map(({ data }: IFetchPostsData) => {
            const {
              title,
              thumbnail,
              author,
              num_comments,
              score,
              permalink,
              created_utc,
              preview,
              id,
            } = data;
            const imageLink = preview?.images[0]?.source?.url || thumbnail;

            return {
              id,
              author: {
                avatarLink: `https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`,
                profilerLink: `https://www.reddit.com/user/${author}`,
                name: author,
              },
              post: {
                link: `https://oauth.reddit.com${permalink}`,
                title: title,
                createdTime: created_utc,
              },
              preview: {
                imgLink: imageLink.replace(/&amp;/g, '&'),
                alt: title,
              },
              karmaCount: score,
              commentsCount: num_comments,
            };
          });

          setPostsData(posts);
        }
      } catch (error) {
        // console.log(error); // для разработки, в реальном проекте нужно обрабатывать и выводить ошибки нормально
        setErrorLoading(String(error));
      }

      setLoading(false);
    }

    if (token) loadPosts(token);
  }, [token]);

  // return [postsData, loading];
  return [{ postsData, loading, errorLoading }];
}
