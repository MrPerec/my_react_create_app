/* useEffect */

import React, { useState } from 'react';
import { getValue } from '../utils/react/pickFromSyntheticEvent';

export function UseEffectWithDeps({ title, id }: { title: string; id: string }) {
  const componentName = `UseEffectWithEmptyDeps`;

  /** если указать 2й аргумент какое-то коркретное значение (например title) которое используется внутри useEffect,
   * то useEffect будет работать каждый раз когда обновляется значение  (title)
   */
  React.useEffect(() => {
    console.log(`${id} <${componentName} /> componentWillReceiveProps: `, title);
    return () => console.log(`${id} <${componentName} /> Эта ф-я выполняется каждый раз при рендере и при размонтировании (componentWillUnmount)`);
  }, [title]);

  return (
    <div>
      <span>{id}</span>
      <p>{title}</p>
    </div>
  );
}
