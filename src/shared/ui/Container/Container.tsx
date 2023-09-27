import React, {FC} from 'react';

import cx from 'classnames';

import classes from './Container.module.scss';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({children, className}) => (
  <div className={cx(classes.container, className)}>{children}</div>
);
