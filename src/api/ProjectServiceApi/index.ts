import { AxiosRequestConfig } from 'axios';
import {
  ApplicationLinksResponseModel as ApplicationLinksResponse,
  ProjectDetailedProjectsResponseModel as ProjectDetailedProjectsResponse,
  ProjectGlobalProjectsResponseModel as ProjectGlobalProjectsResponse,
  ProjectProjectTokenResponseModel as ProjectProjectTokenResponse,
  ProjectSyncWindowsResponseModel as ProjectSyncWindowsResponse,
  V1EventListModel as V1EventList,
  V1alpha1AppProjectModel as V1alpha1AppProject,
  V1alpha1AppProjectListModel as V1alpha1AppProjectList,
} from '../../models';
import { BaseApi } from '../base';
import {
  ProjectServiceCreateParams,
  ProjectServiceCreateTokenParams,
  ProjectServiceDeleteParams,
  ProjectServiceDeleteTokenParams,
  ProjectServiceGetDetailedProjectParams,
  ProjectServiceGetGlobalProjectsParams,
  ProjectServiceGetParams,
  ProjectServiceGetSyncWindowsStateParams,
  ProjectServiceListEventsParams,
  ProjectServiceListLinksParams,
  ProjectServiceListParams,
  ProjectServiceUpdateParams,
} from './types';

export class ProjectServiceApi extends BaseApi {
  async projectServiceCreate(
    params: ProjectServiceCreateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1AppProject> {
    const url = this.buildUrl('/api/v1/projects');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.POST,
      url,
      data: params.body,
    });
    return new V1alpha1AppProject(result);
  }

  async projectServiceCreateToken(
    params: ProjectServiceCreateTokenParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<ProjectProjectTokenResponse> {
    const url = this.buildUrl('/api/v1/projects/{project}/roles/{role}/token', {
      params: params.path,
      required: ['project', 'role'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.POST,
      url,
      data: params.body,
    });
    return new ProjectProjectTokenResponse(result);
  }

  async projectServiceDelete(params: ProjectServiceDeleteParams, options?: Partial<AxiosRequestConfig>): Promise<any> {
    const url = this.buildUrl('/api/v1/projects/{name}', {
      params: params.path,
      required: ['name'],
    });

    return this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.DELETE,
      url,
    });
  }

  async projectServiceDeleteToken(
    params: ProjectServiceDeleteTokenParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<any> {
    const url = this.buildUrl('/api/v1/projects/{project}/roles/{role}/token/{iat}', {
      params: params.path,
      required: ['project', 'role', 'iat'],
    });

    return this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.DELETE,
      url,
      params: params?.query,
    });
  }

  async projectServiceGet(
    params: ProjectServiceGetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1AppProject> {
    const url = this.buildUrl('/api/v1/projects/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
    });
    return new V1alpha1AppProject(result);
  }

  async projectServiceGetDetailedProject(
    params: ProjectServiceGetDetailedProjectParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<ProjectDetailedProjectsResponse> {
    const url = this.buildUrl('/api/v1/projects/{name}/detailed', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
    });
    return new ProjectDetailedProjectsResponse(result);
  }

  async projectServiceGetGlobalProjects(
    params: ProjectServiceGetGlobalProjectsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<ProjectGlobalProjectsResponse> {
    const url = this.buildUrl('/api/v1/projects/{name}/globalprojects', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
    });
    return new ProjectGlobalProjectsResponse(result);
  }

  async projectServiceGetSyncWindowsState(
    params: ProjectServiceGetSyncWindowsStateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<ProjectSyncWindowsResponse> {
    const url = this.buildUrl('/api/v1/projects/{name}/syncwindows', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
    });
    return new ProjectSyncWindowsResponse(result);
  }

  async projectServiceList(
    params?: ProjectServiceListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1AppProjectList> {
    const url = this.buildUrl('/api/v1/projects');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new V1alpha1AppProjectList(result);
  }

  async projectServiceListEvents(
    params: ProjectServiceListEventsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1EventList> {
    const url = this.buildUrl('/api/v1/projects/{name}/events', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
    });
    return new V1EventList(result);
  }

  async projectServiceListLinks(
    params: ProjectServiceListLinksParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<ApplicationLinksResponse> {
    const url = this.buildUrl('/api/v1/projects/{name}/links', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
    });
    return new ApplicationLinksResponse(result);
  }

  async projectServiceUpdate(
    params: ProjectServiceUpdateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1AppProject> {
    const url = this.buildUrl('/api/v1/projects/{project.metadata.name}', {
      params: params.path,
      required: ['project.metadata.name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.PUT,
      url,
      data: params.body,
    });
    return new V1alpha1AppProject(result);
  }
}

export default ProjectServiceApi;
