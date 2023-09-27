import {Base} from '~shared/api/Base';
import {AxiosRequestConfig} from 'axios';
import {IService} from '~shared/types/IService';
import {IPost} from '~shared/types/IPost';
import {IStrapiResponseWrapper} from '~shared/types/IStrapiResponseWrapper';

export class Blog extends Base {
  constructor(baseUrl: string, apiKey?: string) {
    super(baseUrl, apiKey);
  }

  async getPosts(): Promise<IStrapiResponseWrapper<IPost[]>> {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/posts',
    };

    return this.makeRequest<IStrapiResponseWrapper<IPost[]>>(config);
  }

  async getPostById(postId: string): Promise<IStrapiResponseWrapper<IPost>> {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/posts/${postId}`,
    };

    return this.makeRequest<IStrapiResponseWrapper<IPost>>(config);
  }
}
