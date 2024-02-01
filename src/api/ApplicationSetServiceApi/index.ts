import { AxiosRequestConfig } from 'axios';
import {
  ApplicationsetApplicationSetResponseModel as ApplicationsetApplicationSetResponse,
  V1alpha1ApplicationSetModel as V1alpha1ApplicationSet,
  V1alpha1ApplicationSetListModel as V1alpha1ApplicationSetList,
} from '../../models';
import { BaseApi } from '../base';
import {
  ApplicationSetServiceCreateParams,
  ApplicationSetServiceDeleteParams,
  ApplicationSetServiceGetParams,
  ApplicationSetServiceListParams,
} from './types';

export class ApplicationSetServiceApi extends BaseApi {
  async applicationSetServiceCreate(
    params: ApplicationSetServiceCreateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1ApplicationSet> {
    const url = this.buildUrl('/api/v1/applicationsets');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.POST,
      url,
      params: params?.query,
      data: params.body,
    });
    return new V1alpha1ApplicationSet(result);
  }

  async applicationSetServiceDelete(
    params: ApplicationSetServiceDeleteParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<ApplicationsetApplicationSetResponse> {
    const url = this.buildUrl('/api/v1/applicationsets/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.DELETE,
      url,
      params: params?.query,
    });
    return new ApplicationsetApplicationSetResponse(result);
  }

  async applicationSetServiceGet(
    params: ApplicationSetServiceGetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1ApplicationSet> {
    const url = this.buildUrl('/api/v1/applicationsets/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new V1alpha1ApplicationSet(result);
  }

  async applicationSetServiceList(
    params?: ApplicationSetServiceListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1ApplicationSetList> {
    const url = this.buildUrl('/api/v1/applicationsets');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new V1alpha1ApplicationSetList(result);
  }
}

export default ApplicationSetServiceApi;
