import { EColor, EIcons } from '../../enum';
import { TSizesIcon } from '../Icon';

interface IIconsList {
  readonly id: number;
  readonly name: EIcons;
  readonly color: EColor;
  readonly size: TSizesIcon;
}

export const iconsList: IIconsList[] = [
  { id: 1, name: EIcons.quote, color: EColor.grey99, size: '20x12' },
  { id: 2, name: EIcons.picture, color: EColor.grey99, size: '16x20' },
  { id: 3, name: EIcons.document, color: EColor.grey99, size: '16x20' },
  { id: 4, name: EIcons.download, color: EColor.grey99, size: '14x17' },
  { id: 5, name: EIcons.person, color: EColor.grey99, size: 18 },
  { id: 6, name: EIcons.refresh, color: EColor.grey99, size: '22x16' },
  { id: 7, name: EIcons.link, color: EColor.grey99, size: '20x10' },
  { id: 8, name: EIcons.voice, color: EColor.grey99, size: '20x18' },
  { id: 9, name: EIcons.chat, color: EColor.grey99, size: 20 },
  { id: 10, name: EIcons.pen, color: EColor.grey99, size: 18 },
  { id: 11, name: EIcons.font, color: EColor.grey99, size: '16x18' },
  { id: 112, name: EIcons.pdf, color: EColor.grey99, size: 20 },
] as const;
