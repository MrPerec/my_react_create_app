import { EIcons } from '../../../enum';

interface IIcon {
  name: EIcons;
  size: number;
  mobileSize?: number;
}

interface IList {
  readonly id: number;
  readonly isMobile?: boolean;
  readonly As?: 'li' | 'button' | 'div';
  readonly text: string;
  readonly icon: IIcon;
}

export const postMenuList: IList[] = [
  {
    id: 1,
    As: 'li' as const,
    text: `22 комментарии`,
    icon: { name: EIcons.comments, size: 15 },
  },
  {
    id: 2,
    As: 'li' as const,
    text: `Поделиться`,
    icon: { name: EIcons.share, size: 14 },
  },
  {
    id: 3,
    isMobile: true,
    As: 'li' as const,
    text: `Скрыть`,
    icon: { name: EIcons.block, size: 14, mobileSize: 12 },
  },
  {
    id: 4,
    As: 'li' as const,
    text: `Сохранить`,
    icon: { name: EIcons.save, size: 14 },
  },
  {
    id: 5,
    isMobile: true,
    As: 'li' as const,
    text: `Пожаловаться`,
    icon: { name: EIcons.warning, size: 16, mobileSize: 14 },
  },
] as const;

export const commentsMenuList: IList[] = [
  {
    id: 1,
    As: 'li' as const,
    text: `Ответить`,
    icon: { name: EIcons.comments, size: 15 },
  },
  {
    id: 2,
    As: 'li' as const,
    text: `Поделиться`,
    icon: { name: EIcons.share, size: 14 },
  },
  {
    id: 3,
    isMobile: true,
    As: 'li' as const,
    text: `Пожаловаться`,
    icon: { name: EIcons.warning, size: 16, mobileSize: 14 },
  },
] as const;

/** fake post data */
export const postData = {
  id: '12345',
  author: {
    avatarLink: `https://api.dicebear.com/7.x/avataaars/svg?seed=someName`,
    profilerLink: '#',
    name: 'someName',
  },
  post: {
    link: '#',
    title:
      'Следует отметить, что новая модель организационной деятельности поможет',
    createdTime: 1765105483.0,
  },
  karmaCount: 311,
  hiddenCommentTime: 1765488808.0,
  votedPercent: 54,
  comments: [
    {
      id: 1,
      author: {
        avatarLink: `https://api.dicebear.com/7.x/avataaars/svg?seed=commentAuthor5`,
        profilerLink: '#',
        name: 'Михаил Рогов',
      },
      createdTime: 1765121113.0,
      text: 'Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно. ',
      replies: [
        {
          id: 11,
          author: {
            avatarLink: `https://api.dicebear.com/7.x/avataaars/svg?seed=commentAuthor6`,
            profilerLink: '#',
            name: 'Вика Салмина',
          },
          createdTime: 1765111413.0,
          text: 'Принимая во внимание показатели успешности, разбавленное изрядной долей эмпатии, рациональное мышление прекрасно подходит для реализации анализа существующих паттернов поведения. Равным образом, убеждённость некоторых оппонентов, в своём классическом представлении.',
          replies: [
            {
              id: 111,
              author: {
                avatarLink: `https://api.dicebear.com/7.x/avataaars/svg?seed=commentAuthor7`,
                profilerLink: '#',
                name: 'Зураб Желев',
              },
              createdTime: 1765111113.0,
              text: 'А также диаграммы связей неоднозначны и будут функционально разнесены на независимые элементы. Следует отметить, что начало повседневной работы по формированию позиции однозначно определяет каждого участника как способного принимать собственные решения.',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      author: {
        avatarLink: `https://api.dicebear.com/7.x/avataaars/svg?seed=commentAuthor1`,
        profilerLink: '#',
        name: 'Алексей Киняев',
      },
      createdTime: 1765105483.0,
      text: 'Безусловно, повышение уровня гражданского сознания однозначно фиксирует необходимость стандартных.',
    },
    {
      id: 3,
      author: {
        avatarLink: `https://api.dicebear.com/7.x/avataaars/svg?seed=commentAuthor2`,
        profilerLink: '#',
        name: 'Дмитрий Фёдоров',
      },
      createdTime: 1765105413.0,
      text: 'Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно. ',
    },
    {
      id: 4,
      author: {
        avatarLink: `https://api.dicebear.com/7.x/avataaars/svg?seed=commentAuthor3`,
        profilerLink: '#',
        name: 'Игорь Полищук',
      },
      createdTime: 1765105113.0,
      text: 'Но активно развивающиеся страны третьего мира своевременно верифицированы. В целом, конечно.',
      replies: [
        {
          id: 41,
          author: {
            avatarLink: `https://api.dicebear.com/7.x/avataaars/svg?seed=commentAuthor4`,
            profilerLink: '#',
            name: 'Денис Беликов',
          },
          createdTime: 1765101413.0,
          text: 'Новая модель организационной деятельности представляет собой интересный эксперимент проверки форм воздействия. Вот вам яркий пример современных тенденций - перспективное планирование способствует повышению качества кластеризации усилий. Внезапно, некоторые особенности внутренней политики.',
        },
      ],
    },
  ],
};
