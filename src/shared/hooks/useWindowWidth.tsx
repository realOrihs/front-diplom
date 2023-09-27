import {useState, useEffect} from 'react';

import breakpoints from '~shared/config/breakpoints.json';

export const useWindowWidth = (): {
  width: number;
  isPhone: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} => {
  const [width, setWidth] = useState(1980);

  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return {
    width,
    isPhone: width <= breakpoints.lMobile,
    isTablet: width > breakpoints.lMobile && width <= breakpoints.sTablet,
    isDesktop: width > breakpoints.sTablet,
  };
};
