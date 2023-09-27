import {Base} from '~shared/api/Base';
import {AxiosRequestConfig} from 'axios/index';
import {IStrapiResponseWrapper} from '~shared/types/IStrapiResponseWrapper';
import {IUserLogin, IUserSimple} from '~shared/types/IUser';

export class User extends Base {
  constructor(baseUrl: string, apiKey?: string) {
    super(baseUrl, apiKey);
  }

  async login(identifier: string, password: string): Promise<IUserLogin> {
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/auth/local',
      data: {
        identifier,
        password,
      },
    };

    return this.makeRequest<IUserLogin>(config);
  }

  async signup(email: string, username: string, password: string): Promise<IUserLogin> {
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/auth/local/register',
      data: {
        email,
        username,
        password,
      },
    };

    return this.makeRequest<IUserLogin>(config);
  }

  async me(): Promise<IUserSimple> {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/users/me',
    };

    return this.makeRequest<IUserSimple>(config);
  }

  async authVKCallback(query: string): Promise<IUserLogin> {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/auth/vk/callback?' + query,
    };

    return this.makeRequest<IUserLogin>(config);
  }

  async sendReport(title: string, email: string, description: string): Promise<IUserLogin> {
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reports',
      data: {
        data: {
          title,
          email,
          description,
        },
      },
    };

    return this.makeRequest<IUserLogin>(config);
  }
}
