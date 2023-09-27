import React, {FC} from 'react';
import classes from './Breadcrumbs.module.scss';
import Link from 'next/link';
import {ArrowRight} from '~shared/ui/Icons/ArrowRight';
import {IBreadcrumb} from '~shared/types/IBreadcrumb';

interface BreadcrumbsProps {
  items: IBreadcrumb[];
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({items}) => {
  return (
    <div className={classes.wrapper}>
      {items.map((item, index) => (
        <div key={`breadcrumbs-${item.label}-${index}`} className={classes.item}>
          <Link href={item.url} className={classes.link}>
            {item.label}
          </Link>
          {index !== items.length - 1 && (
            <ArrowRight width={12} height={12} className={classes.icon} />
          )}
        </div>
      ))}
    </div>
  );
};
