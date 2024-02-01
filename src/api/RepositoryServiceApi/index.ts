import { AxiosRequestConfig } from 'axios';
import {
  RepositoryHelmChartsResponseModel as RepositoryHelmChartsResponse,
  RepositoryRefsModel as RepositoryRefs,
  RepositoryRepoAppDetailsResponseModel as RepositoryRepoAppDetailsResponse,
  RepositoryRepoAppsResponseModel as RepositoryRepoAppsResponse,
  V1alpha1RepositoryModel as V1alpha1Repository,
  V1alpha1RepositoryListModel as V1alpha1RepositoryList,
} from '../../models';
import { BaseApi } from '../base';
import {
  RepositoryServiceCreateRepositoryParams,
  RepositoryServiceDeleteRepositoryParams,
  RepositoryServiceGetAppDetailsParams,
  RepositoryServiceGetHelmChartsParams,
  RepositoryServiceGetParams,
  RepositoryServiceListAppsParams,
  RepositoryServiceListRefsParams,
  RepositoryServiceListRepositoriesParams,
  RepositoryServiceUpdateRepositoryParams,
  RepositoryServiceValidateAccessParams,
} from './types';

export class RepositoryServiceApi extends BaseApi {
  async repositoryServiceCreateRepository(
    params: RepositoryServiceCreateRepositoryParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1Repository> {
    const url = this.buildUrl('/api/v1/repositories');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.POST,
      url,
      params: params?.query,
      data: params.body,
    });
    return new V1alpha1Repository(result);
  }

  async repositoryServiceDeleteRepository(
    params: RepositoryServiceDeleteRepositoryParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<any> {
    const url = this.buildUrl('/api/v1/repositories/{repo}', {
      params: params.path,
      required: ['repo'],
    });

    return this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.DELETE,
      url,
      params: params?.query,
    });
  }

  async repositoryServiceGet(
    params: RepositoryServiceGetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1Repository> {
    const url = this.buildUrl('/api/v1/repositories/{repo}', {
      params: params.path,
      required: ['repo'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new V1alpha1Repository(result);
  }

  async repositoryServiceGetAppDetails(
    params: RepositoryServiceGetAppDetailsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<RepositoryRepoAppDetailsResponse> {
    const url = this.buildUrl('/api/v1/repositories/{source.repoURL}/appdetails', {
      params: params.path,
      required: ['source.repoURL'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.POST,
      url,
      data: params.body,
    });
    return new RepositoryRepoAppDetailsResponse(result);
  }

  async repositoryServiceGetHelmCharts(
    params: RepositoryServiceGetHelmChartsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<RepositoryHelmChartsResponse> {
    const url = this.buildUrl('/api/v1/repositories/{repo}/helmcharts', {
      params: params.path,
      required: ['repo'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new RepositoryHelmChartsResponse(result);
  }

  async repositoryServiceListApps(
    params: RepositoryServiceListAppsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<RepositoryRepoAppsResponse> {
    const url = this.buildUrl('/api/v1/repositories/{repo}/apps', {
      params: params.path,
      required: ['repo'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new RepositoryRepoAppsResponse(result);
  }

  async repositoryServiceListRefs(
    params: RepositoryServiceListRefsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<RepositoryRefs> {
    const url = this.buildUrl('/api/v1/repositories/{repo}/refs', {
      params: params.path,
      required: ['repo'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new RepositoryRefs(result);
  }

  async repositoryServiceListRepositories(
    params?: RepositoryServiceListRepositoriesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1RepositoryList> {
    const url = this.buildUrl('/api/v1/repositories');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new V1alpha1RepositoryList(result);
  }

  async repositoryServiceUpdateRepository(
    params: RepositoryServiceUpdateRepositoryParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1Repository> {
    const url = this.buildUrl('/api/v1/repositories/{repo.repo}', {
      params: params.path,
      required: ['repo.repo'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.PUT,
      url,
      data: params.body,
    });
    return new V1alpha1Repository(result);
  }

  async repositoryServiceValidateAccess(
    params: RepositoryServiceValidateAccessParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<any> {
    const url = this.buildUrl('/api/v1/repositories/{repo}/validate', {
      params: params.path,
      required: ['repo'],
    });

    return this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.POST,
      url,
      params: params?.query,
      data: params.body,
    });
  }
}

export default RepositoryServiceApi;
