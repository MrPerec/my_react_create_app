import React from 'react';
import { createPortal } from 'react-dom';
import styles from './reply.css';

interface IReplyProps {
  children?: React.ReactNode;
  portalNameNode: string;
}

export function Reply({ portalNameNode, children }: IReplyProps) {
  const replylNode = document.querySelector(`#${portalNameNode}`);
  if (!replylNode) return null;

  return createPortal(children, replylNode);
}
