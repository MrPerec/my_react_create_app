/* useEffect */

import React, { useState, useEffect } from 'react';
/** импортируем собственный хук */
import { useIsMounted } from './useIsMounted';

export function UseEffectWithoutDeps({ title, id }: { title: string; id: string }) {
  const componentName = `UseEffectWithoutDeps`;

  /** если не указывать 2й аргумент, зависимости то useEffect будет отрабатывать просто как 'componentDidMount' и 'componentWillUpdate'
   * useEffect будет запускаться каждый раз при каждом рендере
   */
  React.useEffect(() => {
    console.log(`${id} <${componentName} /> componentWillUpdate`);
    return () => console.log(`${id} <${componentName} /> Эта ф-я выполняется каждый раз при рендере и при размонтировании (componentWillUnmount)`);
  });

  // 2. Воспользуемся пользовательским хуком "useIsMounted"
  const [isMounted] = useIsMounted();
  console.log(isMounted);
  useEffect(() => {
    console.log(`isMounted`, isMounted);
  }, [isMounted]);

  return (
    <div>
      <span>{id}</span>
      <p>{title}</p>
    </div>
  );
}
