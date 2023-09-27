'use client';
import React, {FC, useEffect} from 'react';
import classes from './ServiceSection.module.scss';
import {ServiceSectionProps} from './ServiceSection.types';
import {Box, Card, CardBody, CardHeader, Heading, Input, Text} from '@chakra-ui/react';
import cx from 'classnames';
import {Iframe} from '~features/Iframe';
import {Container} from '~shared/ui/Container/Container';
import {Button} from '~shared/ui/Button/Button';
import {client} from '~shared/api/Client';

export const ServiceSection: FC<ServiceSectionProps> = ({className, service}) => {
  return (
    <section className={cx(classes.section, className)}>
      <Container>
        <Card size={'sm'}>
          <CardHeader>
            <Heading textAlign={'center'}>{service.attributes.name}</Heading>
          </CardHeader>
          <CardBody>
            <Iframe src={service.attributes.link ?? ''} imgURL={service.attributes.img ?? ''} />
            <Text textAlign={'center'} mt={6} mb={4}>
              {service.attributes.description}
            </Text>
            {service.attributes['promo_code']?.data && (
              <Box display='flex' flexDirection='column' alignItems='center' mb={4}>
                <Text fontWeight={700} mb={2}>
                  Наш промокод
                </Text>
                <Input
                  mb={2}
                  value={service.attributes['promo_code'].data.attributes.code}
                  className={classes.input}
                />
                <Text textAlign={'center'} className={classes.promo_desc}>
                  {service.attributes['promo_code'].data.attributes.description}
                </Text>
              </Box>
            )}
            <Button isLink href={service.attributes.link ?? ''} className={classes.btn}>
              <Text>Перейти на link to service</Text>
            </Button>
          </CardBody>
        </Card>
      </Container>
    </section>
  );
};
