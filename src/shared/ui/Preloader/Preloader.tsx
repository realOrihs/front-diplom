import React, {FC} from 'react';
import classes from './Preloader.module.scss';
import {PreloaderProps} from './Preloader.types';
import cx from 'classnames';

export const Preloader: FC<PreloaderProps> = ({className}) => {
  return (
    <div className={cx(classes.loaderWrapper, className)}>
      <div className={classes.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
