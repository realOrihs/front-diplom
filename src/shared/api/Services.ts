import {Base} from '~shared/api/Base';
import {AxiosRequestConfig} from 'axios';
import {IService, IServicesWithAmountCurrencies} from '~shared/types/IService';
import {IStrapiResponseWrapper} from '~shared/types/IStrapiResponseWrapper';
import {IGame} from '~shared/types/IGame';

export class Services extends Base {
  constructor(baseUrl: string, apiKey?: string) {
    super(baseUrl, apiKey);
  }

  async getPromotedServices(): Promise<IStrapiResponseWrapper<IService[]>> {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/places?filters%5BisPromoted%5D[$eq]=true&populate[0]=tags',
    };

    return this.makeRequest<IStrapiResponseWrapper<IService[]>>(config);
  }

  async getServiceById(serviceId: string): Promise<IStrapiResponseWrapper<IService>> {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/places/${serviceId}?populate[tags]=*&populate[promo_code]=*&populate[reviews][populate][2]=user`,
    };

    return this.makeRequest<IStrapiResponseWrapper<IService>>(config);
  }

  async getServicesByGameId(
    gameId: number,
  ): Promise<IStrapiResponseWrapper<IServicesWithAmountCurrencies>> {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/games/${gameId}?filters[places][amount_currencies][game][id][$eq]=${gameId}&populate[places][populate][amount_currencies][populate][game]=*&populate[places][populate][reviews]=*`,
    };

    return this.makeRequest<IStrapiResponseWrapper<IServicesWithAmountCurrencies>>(config);
  }

  async getStatsForService(serviceId: number): Promise<IStrapiResponseWrapper<IService>> {
    const date = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/places/${serviceId}?populate[stats][sort][0]=createdAt:asc&populate[reviews]=*&populate[stats][filters][createdAt][$gt]=${date}`,
    };

    return this.makeRequest<IStrapiResponseWrapper<IService>>(config);
  }
}
