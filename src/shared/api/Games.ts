import {Base} from '~shared/api/Base';
import {AxiosRequestConfig} from 'axios/index';
import {IStrapiResponseWrapper} from '~shared/types/IStrapiResponseWrapper';
import {IPost} from '~shared/types/IPost';
import {IGame} from '~shared/types/IGame';

export class Games extends Base {
  constructor(baseUrl: string, apiKey?: string) {
    super(baseUrl, apiKey);
  }

  async getGames(): Promise<IStrapiResponseWrapper<IGame[]>> {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/games',
    };

    return this.makeRequest<IStrapiResponseWrapper<IGame[]>>(config);
  }
}
