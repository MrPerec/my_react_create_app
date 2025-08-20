import React from 'react';
import { noop } from '../../utils/js/noop';

interface IGenericListProps {
  list: {
    As?: 'a' | 'li' | 'button' | 'div';
    className?: string;
    href?: string;
    id: string;
    text: string;
    onClick?: (id: string) => void;
    icon?: React.JSX.Element;
  }[];
}

export function GenericList({ list }: IGenericListProps) {
  const resultList = list.map(({ As = 'div', text, onClick = noop, className, id, href, icon }) => {
    let content: string | React.JSX.Element = text;

    if (icon) {
      content = (
        <div>
          {icon}
          <span>{text}</span>
        </div>
      );
    }

    return (
      <As className={className} onClick={() => onClick(id)} key={id} href={href}>
        {content}
      </As>
    );
  });

  return <>{resultList}</>;
}
