'use client';
import React, {FC, useEffect, useMemo, useState} from 'react';
import classes from './SearchStatsSection.module.scss';
import {CardStats} from '~entities/CardStats';
import {Container} from '~shared/ui/Container/Container';
import {Select} from 'chakra-react-select';
import {Card, CardBody, CardHeader, Heading, Text, Box, Spinner} from '@chakra-ui/react';
import {SearchStatsSectionProps} from './SearchStatsSection.types';
import cx from 'classnames';

import {storeSelectedGame, setSelectedGame} from '~shared/store/Catalog';
import {useStore} from 'effector-react';
import {IGame} from '~shared/types/IGame';
import {setSelectedService, storeSelectedService} from '~shared/store/SelectedService';
import {client} from '~shared/api/Client';

interface IOption {
  value: IGame;
  label: string;
}

export const SearchStatsSection: FC<SearchStatsSectionProps> = ({className, games}) => {
  const {selectedGame} = useStore(storeSelectedGame);
  const {selectedService, isLoading: isLoadingGetSelectedService} = useStore(storeSelectedService);

  const [gamesLocal, setGamesLocal] = useState<IGame[]>(games);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const options: IOption[] = useMemo(() => {
    return gamesLocal.map((game) => ({value: game, label: game.attributes.name}));
  }, [gamesLocal]);

  useEffect(() => {
    setIsLoading(true);
    client.games
      .getGames()
      .then((response) => {
        setGamesLocal(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => {
      setSelectedService(null);
      setSelectedGame(null);
    };
  }, []);

  return (
    <section className={cx(classes.section, className)}>
      <Container className={classes.container}>
        <Card width='full' align='center' size={'sm'}>
          <CardHeader>
            <Heading>Выберите игру</Heading>
          </CardHeader>
          <CardBody width='85%' position={'relative'}>
            <Select
              className={classes.searchInput}
              placeholder={'Поиск'}
              onChange={(option) => {
                setSelectedGame(option?.value ?? null);
                setSelectedService(null);
              }}
              closeMenuOnSelect={false}
              options={options}
              isClearable
              blurInputOnSelect
              isDisabled={isLoading}
            />
            {isLoading && (
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                position={'absolute'}
                right={'84px'}
                top={'50%'}
                transform={'translateY(-50%)'}
              >
                <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='sm'
                />
              </Box>
            )}
          </CardBody>
        </Card>
        {selectedGame && (selectedService || isLoadingGetSelectedService) && <CardStats />}
      </Container>
    </section>
  );
};
