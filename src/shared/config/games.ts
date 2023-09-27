import {IGame} from '~shared/types/IGame';
import {IGameInfo} from '~shared/types/IGameInfo';

export const games: IGame[] = [
  {
    id: '1',
    image: '/assets/images/game_1.png',
    title: 'To Valhalla',
    tags: [
      {
        id: '1',
        label: 'Hybrid-casual',
      },
      {
        id: '2',
        label: 'Mobile',
      },
    ],
  },
  {
    id: '2',
    image: '/assets/images/game_1.png',
    title: 'Jabka',
    tags: [
      {
        id: '1',
        label: 'Hybrid-casual',
      },
      {
        id: '2',
        label: 'Mobile',
      },
    ],
  },
  {
    id: '3',
    image: '/assets/images/game_1.png',
    title: 'Watch The Boxes',
    tags: [
      {
        id: '1',
        label: 'Hybrid-casual',
      },
      {
        id: '2',
        label: 'Mobile',
      },
    ],
  },
  {
    id: '4',
    image: '/assets/images/game_1.png',
    title: 'Brazillian Ronin',
    tags: [
      {
        id: '1',
        label: 'Hybrid-casual',
      },
      {
        id: '2',
        label: 'Mobile',
      },
    ],
  },
];

export const gameInfo: IGameInfo = {
  id: '1',
  title: 'To Valhalla',
  description:
    'Здесь будет какой-то короткий текст с описнаием игры. Здесь будет какой-то короткий текст с описнаием игры. Здесь будет какой-то короткий текст с описнаием игры.',
  tags: [
    {
      id: '1',
      label: 'Hybrid-casual',
    },
    {
      id: '2',
      label: 'Mobile',
    },
  ],
  embedId: '1UOZ_-mbxyg',
  target: {
    age: '12 - 36 лет, мужчины и женщины',
    location: 'страны Запада и СНГ',
  },
  link: 'https://itch.io',
  images: [
    {id: '1', url: '/assets/images/game-screenshot.png'},
    {id: '2', url: '/assets/images/game-screenshot.png'},
    {id: '3', url: '/assets/images/game-screenshot.png'},
    {id: '4', url: '/assets/images/game-screenshot.png'},
    {id: '5', url: '/assets/images/game-screenshot.png'},
  ],
};
