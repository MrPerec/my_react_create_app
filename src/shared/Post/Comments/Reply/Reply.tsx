import React from 'react';
import { createPortal } from 'react-dom';

interface IReplyProps {
  children?: React.ReactNode;
  portalNode: string;
}

export function Reply({ portalNode, children }: IReplyProps) {
  const replylNode = document.querySelector(`#${portalNode}`);
  if (!replylNode) return null;

  return createPortal(children, replylNode);
}
