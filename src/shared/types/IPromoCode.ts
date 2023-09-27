export interface IPromoCode {
  id: number;
  attributes: IAttributes;
}

export interface IAttributes {
  code: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
