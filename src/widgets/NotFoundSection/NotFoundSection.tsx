'use client';
import React, {FC} from 'react';
import classes from './NotFoundSection.module.scss';
import {NotFoundSectionProps} from './NotFoundSection.types';
import cx from 'classnames';
import {Card, CardBody, CardHeader, Heading, Text} from '@chakra-ui/react';
import {Button} from '~shared/ui/Button/Button';
import {Container} from '~shared/ui/Container/Container';

export const NotFoundSection: FC<NotFoundSectionProps> = ({className}) => {
  return (
    <section className={cx(classes.section, className)}>
      <Container>
        <Card size={'sm'}>
          <CardHeader>
            <Heading>Страница не найдена!</Heading>
          </CardHeader>
          <CardBody>
            <Text>Возможно, она была перемещена или вы неверно указали адрес</Text>
            <Button isLink href={'/'}>
              Вернуться на главную
            </Button>
          </CardBody>
        </Card>
      </Container>
    </section>
  );
};
