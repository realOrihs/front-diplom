export interface ITag {
  id: number;
  attributes: IAttributes;
}

interface IAttributes {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
