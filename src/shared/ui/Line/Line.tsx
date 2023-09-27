import React, {FC} from 'react';
import classes from './Line.module.scss';

interface LineProps {
  width: string;
  height: string;
  color: string;
  rotate: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export const Line: FC<LineProps> = ({
  width,
  height,
  color,
  rotate,
  top,
  left,
  right,
  bottom
}) => {
  return (
    <div
      className={classes.line}
      style={{
        width,
        height,
        backgroundColor: color,
        transform: `rotate(${rotate}deg)`,
        left,
        top,
        right,
        bottom
    }}
    />
  );
};