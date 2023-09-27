export interface IPost {
  id: number;
  attributes: IAttributes;
}

interface IAttributes {
  title: string;
  description: string;
  shortDescription?: string;
  img?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
