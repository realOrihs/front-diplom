import React, {FC} from 'react';
import classes from './BreadcrumbsSection.module.scss';
import {Container} from '~shared/ui/Container/Container';
import {Breadcrumbs} from '~shared/ui/Breadcrumbs/Breadcrumbs';
import {IBreadcrumb} from '~shared/types/IBreadcrumb';

interface BreadcrumbsSectionProps {
  items: IBreadcrumb[];
}

export const BreadcrumbsSection: FC<BreadcrumbsSectionProps> = ({items}) => {
  return (
    <section className={classes.section}>
      <Container className={classes.container}>
        <Breadcrumbs items={items} />
      </Container>
    </section>
  );
};
