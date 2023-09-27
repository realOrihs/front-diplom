'use client';

import React from 'react';
import classes from './WelcomeSection.module.scss';
import {Container} from '~shared/ui/Container/Container';
import {Card, CardBody, CardHeader, Heading, Text} from '@chakra-ui/react';
export const WelcomeSection = () => {
  return (
    <section className={classes.section}>
      <Container className={classes.container}>
        <Card width={'full'} size={'sm'}>
          <CardHeader>
            <Heading textAlign='center'>Мониторинг сервисов игровых транзакций</Heading>
          </CardHeader>
          <CardBody>
            <Text textAlign='center'>
              Мониторинг сервисов микротранзакций поможет вам быстро обменивать деньги на
              внутриигровые покупки в сети интернет с наименьшими комиссионными затратами. Ниже в
              таблице предлагаются лучшие курсы обмена по наиболее востребованным играм. Чтобы
              получить полный список обменников по какой-либо определенной игре перейдите на
              страницу Каталог.
            </Text>
          </CardBody>
        </Card>
      </Container>
    </section>
  );
};
