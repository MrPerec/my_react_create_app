import { useCallback, useState } from 'react';
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
  loadPosts: () => void;
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
    readonly preview: { images: [{ source: { url: string } }] };
  };
}

export function usePostsData(): [IUsePostsData] {
  const [postsData, setPostsData] = useState<IPostData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorLoading, setErrorLoading] = useState<string>('');
  // создали state для курсора after что бы получать последующие посты
  const [nextAfter, setNextAfter] = useState<string>('');

  const token = useSelector<RootState, tokenState>((state) => state.token);

  // вынесли ф-ю из useEffect
  const loadPosts = useCallback(async () => {
    // если токена нет то выходим из ф-ии
    if (!token) return;

    setLoading(true);
    setErrorLoading('');

    try {
      const { data } = await axios.get('https://oauth.reddit.com/r/all/top/', {
        headers: { Authorization: `bearer ${token}` },
        // добавили cursor в параметр after для получения последующих постов
        params: { limit: 10, after: nextAfter },
      });

      if (data?.data?.children && data?.data?.after) {
        const { children, after } = data.data;
        // устанавливаем следующий cursor для after
        setNextAfter(after);

        if (children.length > 0) {
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

          // добавляем новые посты в state
          setPostsData((prev) => prev.concat(...posts));
        }
      }
    } catch (error) {
      setErrorLoading(String(error));
    }

    setLoading(false);
  }, [token, nextAfter]);

  // добавил ф-ю loadPosts в хук что бы можно было получать вызывать получение постов в других компонентах
  return [{ postsData, loading, errorLoading, loadPosts }];
}
