import React, { useEffect, useState } from 'react';

/** хук который возвращает значение смонтирован компонент или нет */
export function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return [isMounted];
}
