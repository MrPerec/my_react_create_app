/* Какие бывают хуки (React v16):
  1. useState
  2. useEffect - в этом уроке будем говорить
  3. useRef - будет отдельная тема
  4. useReducer
  5. useMemo - в этом уроке будем говорить
  6. useContext - будет отдельная тема
  7. useCallback
  8. useImperative - не будем рассматривать
  9. useLayoutEffect - не будем рассматривать
  10. useDebugValue - не будем рассматривать
*/

/** 1. Продемонстрируем исользование useEffect */
import React, { useEffect, useMemo, useState } from 'react';

import { UseEffectWithoutDeps } from './UseEffectWithoutDeps';
import { UseEffectWithEmptyDeps } from './UseEffectWithEmptyDeps';
import { UseEffectWithDeps } from './UseEffectWithDeps';

import { getValue } from '../utils/react/pickFromSyntheticEvent';

import { calculate } from './calculate';

export function MyHooks() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [title1, setTitle1] = useState('');
  const [title2, setTitle2] = useState('');
  const [title3, setTitle3] = useState('');

  const componentUseEffectWithoutDeps = (
    <div>
      <h3>"UseEffectWithoutDeps"</h3>
      <input type='text' onChange={getValue(setTitle1)} />
      <br />
      <button onClick={() => setIsVisible1(!isVisible1)}>Change me!</button>
      {isVisible1 && <UseEffectWithoutDeps title={title1} id={'1'} />}
    </div>
  );

  const componentUseEffectWithEmptyDeps = (
    <div>
      <h3>"UseEffectWithEmptyDeps"</h3>
      <input type='text' onChange={getValue(setTitle2)} />
      <br />
      <button onClick={() => setIsVisible2(!isVisible2)}>Change me!</button>
      {isVisible2 && <UseEffectWithEmptyDeps title={title2} id={'2'} />}
    </div>
  );

  const componentUseEffectWithDeps = (
    <div>
      <h3>"UseEffectWithDeps"</h3>
      <input type='text' onChange={getValue(setTitle3)} />
      <br />
      <button onClick={() => setIsVisible3(!isVisible3)}>Change me!</button>
      {isVisible3 && <UseEffectWithDeps title={title3} id={'3'} />}
    </div>
  );
  const items = 10;
  const multiplier = 5;
  const result = useMemo(() => {
    console.log('calculate: ');
    return calculate(items, multiplier);
  }, [items, multiplier]);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexFlow: 'row wrap', padding: '20px 40px' }}>
        {componentUseEffectWithoutDeps}
        {componentUseEffectWithEmptyDeps}
        {componentUseEffectWithDeps}
      </div>
      {result}
    </>
  );
}

/** 2. Напишем собственный хук который сообщает что компонент смонтирован
 * см. файл "./useIsMounted"
 */

/** 3. Напишем ф-ю которая дкмонстрирует использвание useMemo */
