import {ITag} from '~shared/types/ITag';
import {IReview} from '~shared/types/IReview';
import {IPromoCode} from '~shared/types/IPromoCode';
import {IGame} from '~shared/types/IGame';

export interface IService {
  id: number;
  attributes: IAttributes;
}

interface IAttributes {
  name: string;
  description: string;
  totalCountTransaction: string;
  volume: string;
  isPromoted: boolean;
  link: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  img: string | null;
  tags?: {data: ITag[]};
  reviews?: {data: IReview[]};
  promo_code?: {data: IPromoCode | null};
  stats?: IStats;
}

interface IStats {
  data: IStat[];
}

export interface IStat {
  id: number;
  attributes: IAttributesStat;
}

interface IAttributesStat {
  count_transaction: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

export interface IServicesWithAmountCurrencies {
  id: number;
  attributes: IAttributesGame;
}

interface IAttributesGame {
  name: string;
  currency: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  places: IPlaces;
}

interface IPlaces {
  data: IPlace[];
}

interface IPlace {
  id: number;
  attributes: IAttributesPlace;
}

interface IAttributesPlace {
  name: string;
  description: string;
  totalCountTransaction: string;
  volume: string;
  isPromoted: boolean;
  link: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  img: string;
  amount_currencies: IAmountCurrencies;
  reviews: IReviews;
}

interface IAmountCurrencies {
  data: IAmountCurrency[];
}

interface IAmountCurrency {
  id: number;
  attributes: IAttributesCurrency;
}

interface IAttributesCurrency {
  amount: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  game: GameInCurrency;
}

interface GameInCurrency {
  data: IGame;
}

interface IReviews {
  data: IReview[];
}
