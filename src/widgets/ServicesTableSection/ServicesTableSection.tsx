import React, {FC} from 'react';
import classes from './ServicesTableSection.module.scss';
import {ServicesTableSectionProps} from './ServicesTableSection.types';
import cx from 'classnames';
import {Container} from '~shared/ui/Container/Container';
import {ServicesTable} from '~features/ServicesTable';
import {Text} from '@chakra-ui/react';

export const ServicesTableSection: FC<ServicesTableSectionProps> = ({className}) => {
  return (
    <section className={cx(classes.section, className)}>
      <Container>
        <ServicesTable />
      </Container>
    </section>
  );
};
