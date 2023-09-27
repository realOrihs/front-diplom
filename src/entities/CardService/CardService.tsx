'use client';
import React, {FC} from 'react';
import classes from './CardService.module.scss';
import Image from 'next/image';
import {Button} from '~shared/ui/Button/Button';
import {Tag} from '~shared/ui/Tag/Tag';
import {CardServiceProps} from './CardService.types';

export const CardService: FC<CardServiceProps> = ({service}) => {
  return (
    <div className={classes.card}>
      <div className={classes.contentWrapper}>
        <div className={classes.imgWrapper}>
          {service.attributes.img && (
            <Image objectFit={'cover'} fill src={service.attributes.img} alt={'card_img'} />
          )}
        </div>
        <div className={classes.content}>
          <h3 className={classes.title}>{service.attributes.name}</h3>
          {service.attributes.tags && service.attributes.tags.data.length > 0 && (
            <div className={classes.tags}>
              {service.attributes.tags?.data.map((tag) => (
                <Tag key={`card_game_tag_${tag.id}`} label={tag.attributes.name} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={classes.btnWrapper}>
        <Button isLink href={`/service/${service.id}`}>
          Подробнее
        </Button>
      </div>
    </div>
  );
};
