'use client';
import React, {FC, useEffect, useState} from 'react';
import classes from './PromotedServicesSection.module.scss';
import {CardService} from '~entities/CardService/CardService';
import {Container} from '~shared/ui/Container/Container';
import {Title} from '~shared/ui/Title';
import ImageUploading from 'react-images-uploading';
import Axios from 'axios';
import {Button} from '~shared/ui/Button/Button';
import {PromotedServicesSectionProps} from './PromotedServicesSection.types';
import cx from 'classnames';
import {client} from '~shared/api/Client';

export const PromotedServicesSection: FC<PromotedServicesSectionProps> = ({
  className,
  services,
}) => {

  return (
    <section className={cx(classes.section, className)}>
      <Container className={classes.container}>
        <Title title={'Лучшие сервисы'} />
        <div className={classes.games}>
          {services.map((service) => (
            <CardService key={`game_${service.id}`} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
};
