/* useEffect */

import React, { useState } from 'react';
// import { getValue } from '../utils/react/pickFromSyntheticEvent';

export function UseEffectWithEmptyDeps({ title, id }: { title: string; id: string }) {
  const componentName = `UseEffectWithEmptyDeps`;

  /** если указать 2й аргумент, то useEffect будет работать только как 'componentDidMount'
   * useEffect запустится один раз при самом первом рендере
   */
  React.useEffect(() => {
    console.log(`${id} <${componentName} /> componentDidMount`);
    return () => console.log(`${id} <${componentName} /> Эта ф-я выполнится перед размонтированием (componentWillUnmount)`);
  }, []);

  return (
    <div>
      <span>{id}</span>
      <p>{title}</p>
    </div>
  );
}
