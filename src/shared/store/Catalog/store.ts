import {IGame} from '~shared/types/IGame';
import {createEvent, createStore} from 'effector';

type Store = {
  selectedGame: IGame | null;
};

export const setSelectedGame = createEvent<IGame | null>();

const initialState: Store = {
  selectedGame: null,
};

export const storeSelectedGame = createStore<Store>(initialState).on(
  setSelectedGame,
  (state, selectedGame) => ({...state, selectedGame}),
);
