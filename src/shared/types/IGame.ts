import {IService} from '~shared/types/IService';

export interface IGame {
  id: number;
  attributes: IAttributes;
}

interface IAttributes {
  name: string;
  description: string;
  currency: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  places?: {data: IService[]};
}
