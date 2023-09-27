import React, {FC} from 'react';
import classes from './Tag.module.scss';

interface TagProps {
  label: string;
}
export const Tag: FC<TagProps> = ({label}) => {
  return <span className={classes.tag}>{label}</span>;
};
