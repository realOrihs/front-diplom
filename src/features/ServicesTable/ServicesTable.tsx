'use client';

import React, {FC, useEffect, useState} from 'react';
import classes from './ServicesTable.module.scss';
import {ServicesTableProps} from './ServicesTable.types';
import {Card, CardBody, CardHeader, Heading, Skeleton, Stack, Text} from '@chakra-ui/react';
import {DataTable} from '~entities/DataTable';
import {createColumnHelper} from '@tanstack/table-core';
import {useStore} from 'effector-react';
import {storeSelectedGame} from '~shared/store/Catalog';
import {client} from '~shared/api/Client';
import {useToast} from '@chakra-ui/toast';
import {UnitConversion} from '~entities/DataTable/DataTable.types';

const data: UnitConversion[] = [
  {
    serviceId: 1,
    service: 'AppGallery',
    price: '100р/1n',
    reviews: '0/100',
  },
  {
    serviceId: 1,
    service: 'IceGames',
    price: '110р/1n',
    reviews: '0/100',
  },
  {
    serviceId: 1,
    service: 'SteamBalance',
    price: '90р/1n',
    reviews: '1/100',
  },
  {
    serviceId: 1,
    service: 'SteamBuy',
    price: '95р/1n',
    reviews: '0/100',
  },
];

const columnHelper = createColumnHelper<UnitConversion>();

const columns = [
  columnHelper.accessor('service', {
    cell: (info) => info.getValue(),
    header: 'Сервис',
  }),
  columnHelper.accessor('price', {
    cell: (info) => info.getValue(),
    header: 'Цена валюты*',
  }),
  columnHelper.accessor('reviews', {
    cell: (info) => info.getValue(),
    header: 'Отзывы',
    meta: {
      isNumeric: true,
    },
  }),
];

interface IServiceForTable {
  serviceId: number;
  service: string;
  price: string;
  reviews: string;
}

export const ServicesTable: FC<ServicesTableProps> = ({className}) => {
  const [services, setServices] = useState<IServiceForTable[]>(data);
  const {selectedGame} = useStore(storeSelectedGame);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toast = useToast();

  useEffect(() => {
    if (selectedGame) {
      setIsLoading(true);
      client.services
        .getServicesByGameId(selectedGame.id)
        .then((response) => {
          const tempServices: IServiceForTable[] = [];
          const currency = response.data.attributes.currency;
          response.data.attributes.places.data.forEach((place) => {
            const name = place.attributes.name;
            let positiveReviewCount = 0;
            let negativeReviewCount = 0;
            const amountCurrencies = place.attributes.amount_currencies.data.filter(
              (amountCurrency) => amountCurrency.attributes.game.data.id === selectedGame.id,
            );
            const amount = amountCurrencies.length ? amountCurrencies[0].attributes.amount : 0;
            const amountCost = amountCurrencies.length ? amountCurrencies[0].attributes.amountCost : 0;
            place.attributes.reviews.data.forEach((review) => {
              if (review.attributes.grade >= 3) {
                positiveReviewCount++;
              } else {
                negativeReviewCount++;
              }
            });
            tempServices.push({
              serviceId: place.id,
              service: name,
              price: `${amountCost}р/${amount} ${currency}`,
              reviews: `${negativeReviewCount}/${positiveReviewCount}`,
            });
          });
          setServices([...tempServices]);
        })
        .catch((error) => {
          toast({
            title: 'Ошибка получения сервисов!',
            description: 'Что-то пошло не так, попробуйте позже!',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [selectedGame]);

  if (!selectedGame) {
    return null;
  }

  return (
    <>
      <Card width={'full'}>
        <CardHeader>
          <Heading>Статистика цен</Heading>
        </CardHeader>
        <CardBody className={classes.cardBody}>
          {isLoading ? (
            <Stack>
              <Skeleton height='60px' />
              <Skeleton height='60px' />
              <Skeleton height='60px' />
            </Stack>
          ) : (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <DataTable columns={columns} data={services} />
          )}
        </CardBody>
      </Card>
      <Text className={classes.text}>
        *Мы учитываем комиссии сервисов, но мы не учитываем переменные издержки, связанные с
        разницей курсов валют в Steam, а также с комиссией платежных систем. Для уточнения
        окончательной цены посетите обменный сервис
      </Text>
    </>
  );
};
