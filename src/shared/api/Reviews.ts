import {Base} from '~shared/api/Base';
import {AxiosRequestConfig} from 'axios';
import {IReview} from '~shared/types/IReview';
import {IStrapiResponseWrapper} from '~shared/types/IStrapiResponseWrapper';

export class Reviews extends Base {
  constructor(baseUrl: string, apiKey?: string) {
    super(baseUrl, apiKey);
  }

  async sendReview(
    content: string,
    grade: number,
    userId: number,
    placeId: number,
  ): Promise<IStrapiResponseWrapper<IReview>> {
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: {data: {content, grade, user: `${userId}`, place: `${placeId}`}},
    };

    return this.makeRequest<IStrapiResponseWrapper<IReview>>(config);
  }
}
