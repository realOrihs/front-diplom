import {ITag} from '~shared/types/ITag';
import {IImage} from '~shared/types/IImage';

export interface IGameInfo {
  id: string;
  title: string;
  description: string;
  embedId: string | null;
  tags: ITag[];
  target: {
    age: string;
    location: string;
  };
  link: string;
  images: IImage[];
}
