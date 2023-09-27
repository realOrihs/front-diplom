'use client';

import {useEffect} from 'react';

import {motion, AnimatePresence} from 'framer-motion';

export const PageWrapper = ({children}: {children: React.ReactNode}) => {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document?.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVH();
    window.addEventListener('resize', setVH);
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener('resize', setVH);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{opacity: 0, y: 15}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 15}}
        transition={{delay: 0.25}}
        style={{flex: 1, display: 'flex', flexDirection: 'column'}}
      >
        <main className='content'>{children}</main>
      </motion.div>
    </AnimatePresence>
  );
};
