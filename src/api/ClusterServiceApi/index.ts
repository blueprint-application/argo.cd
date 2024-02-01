import { AxiosRequestConfig } from 'axios';
import { V1alpha1ClusterModel as V1alpha1Cluster, V1alpha1ClusterListModel as V1alpha1ClusterList } from '../../models';
import { BaseApi } from '../base';
import {
  ClusterServiceCreateParams,
  ClusterServiceDeleteParams,
  ClusterServiceGetParams,
  ClusterServiceInvalidateCacheParams,
  ClusterServiceListParams,
  ClusterServiceRotateAuthParams,
  ClusterServiceUpdateParams,
} from './types';

export class ClusterServiceApi extends BaseApi {
  async clusterServiceCreate(
    params: ClusterServiceCreateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1Cluster> {
    const url = this.buildUrl('/api/v1/clusters');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.POST,
      url,
      params: params?.query,
      data: params.body,
    });
    return new V1alpha1Cluster(result);
  }

  async clusterServiceDelete(params: ClusterServiceDeleteParams, options?: Partial<AxiosRequestConfig>): Promise<any> {
    const url = this.buildUrl('/api/v1/clusters/{id.value}', {
      params: params.path,
      required: ['id.value'],
    });

    return this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.DELETE,
      url,
      params: params?.query,
    });
  }

  async clusterServiceGet(
    params: ClusterServiceGetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1Cluster> {
    const url = this.buildUrl('/api/v1/clusters/{id.value}', {
      params: params.path,
      required: ['id.value'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new V1alpha1Cluster(result);
  }

  async clusterServiceInvalidateCache(
    params: ClusterServiceInvalidateCacheParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1Cluster> {
    const url = this.buildUrl('/api/v1/clusters/{id.value}/invalidate-cache', {
      params: params.path,
      required: ['id.value'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.POST,
      url,
    });
    return new V1alpha1Cluster(result);
  }

  async clusterServiceList(
    params?: ClusterServiceListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1ClusterList> {
    const url = this.buildUrl('/api/v1/clusters');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new V1alpha1ClusterList(result);
  }

  async clusterServiceRotateAuth(
    params: ClusterServiceRotateAuthParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<any> {
    const url = this.buildUrl('/api/v1/clusters/{id.value}/rotate-auth', {
      params: params.path,
      required: ['id.value'],
    });

    return this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.POST,
      url,
    });
  }

  async clusterServiceUpdate(
    params: ClusterServiceUpdateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1Cluster> {
    const url = this.buildUrl('/api/v1/clusters/{id.value}', {
      params: params.path,
      required: ['id.value'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.PUT,
      url,
      params: params?.query,
      data: params.body,
    });
    return new V1alpha1Cluster(result);
  }
}

export default ClusterServiceApi;
