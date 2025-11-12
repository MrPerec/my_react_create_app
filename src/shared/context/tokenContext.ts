import { createContext } from 'react';

// ф-я createContext нужна для создания контекста
export const tokenContext = createContext('');

/* 
После того как присвоили context переменно tokenContext то она получила 2 метода:
  - tokenContext.Provider - нужен что бы передать данные в context
  - tokenContext.Consumer - что бы забрать данные из context
Они будут использоваться в тех компонентах где мы хотим получить token, что бы ими воспользоваться 
обернум компонент App в <Provider value={token}></Provider> (см. App.tsx)
*/
