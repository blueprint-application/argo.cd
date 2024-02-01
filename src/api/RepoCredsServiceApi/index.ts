import { AxiosRequestConfig } from 'axios';
import {
  V1alpha1RepoCredsModel as V1alpha1RepoCreds,
  V1alpha1RepoCredsListModel as V1alpha1RepoCredsList,
} from '../../models';
import { BaseApi } from '../base';
import {
  RepoCredsServiceCreateRepositoryCredentialsParams,
  RepoCredsServiceDeleteRepositoryCredentialsParams,
  RepoCredsServiceListRepositoryCredentialsParams,
  RepoCredsServiceUpdateRepositoryCredentialsParams,
} from './types';

export class RepoCredsServiceApi extends BaseApi {
  async repoCredsServiceCreateRepositoryCredentials(
    params: RepoCredsServiceCreateRepositoryCredentialsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1RepoCreds> {
    const url = this.buildUrl('/api/v1/repocreds');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.POST,
      url,
      params: params?.query,
      data: params.body,
    });
    return new V1alpha1RepoCreds(result);
  }

  async repoCredsServiceDeleteRepositoryCredentials(
    params: RepoCredsServiceDeleteRepositoryCredentialsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<any> {
    const url = this.buildUrl('/api/v1/repocreds/{url}', {
      params: params.path,
      required: ['url'],
    });

    return this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.DELETE,
      url,
    });
  }

  async repoCredsServiceListRepositoryCredentials(
    params?: RepoCredsServiceListRepositoryCredentialsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1RepoCredsList> {
    const url = this.buildUrl('/api/v1/repocreds');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new V1alpha1RepoCredsList(result);
  }

  async repoCredsServiceUpdateRepositoryCredentials(
    params: RepoCredsServiceUpdateRepositoryCredentialsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1RepoCreds> {
    const url = this.buildUrl('/api/v1/repocreds/{creds.url}', {
      params: params.path,
      required: ['creds.url'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.PUT,
      url,
      data: params.body,
    });
    return new V1alpha1RepoCreds(result);
  }
}

export default RepoCredsServiceApi;
