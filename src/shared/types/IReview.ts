import {IUser} from '~shared/types/IUser';

export interface IReview {
  id: number;
  attributes: IAttributes;
}

interface IAttributes {
  content: string;
  grade: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  user: {data: IUser};
}
