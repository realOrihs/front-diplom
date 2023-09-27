'use client';
import React, {FC} from 'react';
import classes from './Navigate.module.scss';
import {useRouter} from 'next/navigation';

interface NavigateProps {
  to: string;
}

export const Navigate: FC<NavigateProps> = ({to}) => {
  const router = useRouter();
  router.replace(to);
  return <></>;
};
