import { useEffect, useState } from 'react';

export function useScreenWidth(): [number] {
  let windowInnerWidth: number = 320;
  if (typeof window !== 'undefined') windowInnerWidth = window.innerWidth;

  const [screenWidth, setScreenWidth] = useState(windowInnerWidth);

  useEffect(() => {
    const changeWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', changeWidth);
    return () => window.removeEventListener('resize', changeWidth);
  }, []);

  return [screenWidth];
}
