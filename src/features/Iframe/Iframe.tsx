'use client';
import React, {FC, useRef, useState} from 'react';
import classes from './Iframe.module.scss';
import {IframeProps} from './Iframe.types';
import Image from 'next/image';

export const Iframe: FC<IframeProps> = ({className, src, imgURL}) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const handleIframeLoad = (e) => {
    setIframeLoaded(true);
    checkIframeStatus();
  };

  const handleError = (e) => {
    console.log(e);
    setIsError(true);
  };

  const checkIframeStatus = () => {
    if (iframeRef.current) {
      if (!iframeRef.current?.contentWindow) {
        setIsError(true);
      }
      console.log(iframeRef.current?.contentWindow);
    }
  };

  return (
    <div className={className} style={{position: 'relative', zIndex: 2}}>
      {(!iframeLoaded || isError) && (
        <Image
          objectFit={'cover'}
          fill
          src={imgURL ? imgURL : '/assets/images/game_1.png'}
          alt={'card_img'}
        />
      )}
      <iframe
        ref={iframeRef}
        src={src}
        frameBorder='0'
        style={{width: '100%', height: 500}}
        onLoad={handleIframeLoad}
        onError={handleError}
      />
    </div>
  );
};
