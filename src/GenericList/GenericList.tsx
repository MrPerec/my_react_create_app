import React from 'react';
import { noop } from '../utils/js/noop';

interface IGenericListProps {
  list: {
    As?: 'a' | 'li' | 'button' | 'div';
    className?: string;
    href?: string;
    id: string;
    text: string;
    onClick?: (id: string) => void;
  }[];
}

export function GenericList({ list }: IGenericListProps) {
  const resultList = list.map(({ As = 'div', text, onClick = noop, className, id, href }) => {
    return (
      <As className={className} onClick={() => onClick(id)} key={id} href={href}>
        {text}
      </As>
    );
  });

  return <>{resultList}</>;
}
