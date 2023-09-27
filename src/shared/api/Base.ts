import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

export class Base {
  protected apiWithAuth: AxiosInstance;

  constructor(baseUrl: string, apiKey?: string) {
    this.apiWithAuth = axios.create({
      baseURL: baseUrl,
    });
  }

  protected async makeRequest<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const _config = {...config};
      if (typeof localStorage === 'object') {
        const token = localStorage.getItem('accessToken');
        if (token) {
          if (!_config.headers) {
            _config.headers = {};
          }

          _config.headers.Authorization = `Bearer ${token}`;
        }
      }

      const response: AxiosResponse<T> = await this.apiWithAuth.request(_config);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
}
