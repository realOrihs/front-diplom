import {IPost} from '~shared/types/IPost';

export interface PostProps {
  className?: string;
  fullMode?: boolean;
  post: IPost;
}
