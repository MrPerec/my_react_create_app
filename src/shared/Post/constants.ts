import { EIcons } from '../../enum';

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
