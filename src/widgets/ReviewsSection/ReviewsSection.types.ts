import {IReview} from '~shared/types/IReview';

export interface ReviewsSectionProps {
  className?: string;
  reviews: IReview[];
  placeId: number;
}
