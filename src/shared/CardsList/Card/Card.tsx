import React from 'react';
import styles from './card.css';

import { TextContent } from './TextContent/TextContent';
import { Preview } from './Preview/Preview';
import { Menu } from './Menu/Menu';
import { Controls } from './Controls/Controls';
import { IPostData } from '../../../hooks/usePostsData';

interface ICardProps {
  cardData: IPostData;
}

export function Card({ cardData }: ICardProps) {
  return (
    <li className={styles.card}>
      <TextContent author={cardData.author} post={cardData.post} />
      <Preview preview={cardData.preview} />
      <Menu />
      <Controls karmaCount={cardData.karmaCount} commentsCount={cardData.commentsCount} />
    </li>
  );
}
