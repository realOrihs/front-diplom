import React, {FC} from 'react';
import classes from './YoutubePlayer.module.scss';
import cx from 'classnames';

interface YoutubePlayerProps {
  embedId: string;
  className?: string;
}

export const YoutubePlayer: FC<YoutubePlayerProps> = ({embedId, className}) => {
  return (
    <div className={cx(classes.wrapper, className)}>
      <iframe
        width='100%'
        height='100%'
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  );
};
