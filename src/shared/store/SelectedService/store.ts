import {IService} from '~shared/types/IService';
import {createEvent, createStore} from 'effector';

type Store = {
  selectedService: IService | null;
  isLoading: boolean;
};

export const setSelectedService = createEvent<IService | null>();

export const setIsLoadingGetSelectedService = createEvent<boolean>();

const initialState: Store = {
  selectedService: null,
  isLoading: false,
};

export const storeSelectedService = createStore<Store>(initialState)
  .on(setSelectedService, (state, selectedService) => ({
    ...state,
    selectedService,
    isLoading: false,
  }))
  .on(setIsLoadingGetSelectedService, (state, isLoading) => ({...state, isLoading}));
