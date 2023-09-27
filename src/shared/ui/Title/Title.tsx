'use client';

import React, {FC} from 'react';
import classes from './Title.module.scss';
import {TitleProps} from './Title.types';
import {Heading} from '@chakra-ui/react';
import cx from 'classnames';

export const Title: FC<TitleProps> = ({className, title}) => {
  return (
    <div className={cx(classes.titleWrapper, className)}>
      <Heading className={classes.title} textAlign='center' size='lg'>
        {title}
      </Heading>
    </div>
  );
};
