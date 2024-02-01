import { AxiosRequestConfig } from 'axios';
import {
  ApplicationApplicationResourceResponseModel as ApplicationApplicationResourceResponse,
  ApplicationApplicationSyncWindowsResponseModel as ApplicationApplicationSyncWindowsResponse,
  ApplicationLinksResponseModel as ApplicationLinksResponse,
  ApplicationManagedResourcesResponseModel as ApplicationManagedResourcesResponse,
  ApplicationResourceActionsListResponseModel as ApplicationResourceActionsListResponse,
  RepositoryManifestResponseModel as RepositoryManifestResponse,
  StreamResultOfApplicationLogEntryModel as StreamResultOfApplicationLogEntry,
  StreamResultOfV1alpha1ApplicationTreeModel as StreamResultOfV1alpha1ApplicationTree,
  StreamResultOfV1alpha1ApplicationWatchEventModel as StreamResultOfV1alpha1ApplicationWatchEvent,
  V1EventListModel as V1EventList,
  V1alpha1ApplicationModel as V1alpha1Application,
  V1alpha1ApplicationListModel as V1alpha1ApplicationList,
  V1alpha1ApplicationSpecModel as V1alpha1ApplicationSpec,
  V1alpha1ApplicationTreeModel as V1alpha1ApplicationTree,
  V1alpha1ChartDetailsModel as V1alpha1ChartDetails,
  V1alpha1RevisionMetadataModel as V1alpha1RevisionMetadata,
} from '../../models';
import { BaseApi } from '../base';
import {
  ApplicationServiceCreateParams,
  ApplicationServiceDeleteParams,
  ApplicationServiceDeleteResourceParams,
  ApplicationServiceGetApplicationSyncWindowsParams,
  ApplicationServiceGetManifestsParams,
  ApplicationServiceGetManifestsWithFilesParams,
  ApplicationServiceGetParams,
  ApplicationServiceGetResourceParams,
  ApplicationServiceListLinksParams,
  ApplicationServiceListParams,
  ApplicationServiceListResourceActionsParams,
  ApplicationServiceListResourceEventsParams,
  ApplicationServiceListResourceLinksParams,
  ApplicationServiceManagedResourcesParams,
  ApplicationServicePatchParams,
  ApplicationServicePatchResourceParams,
  ApplicationServicePodLogs2Params,
  ApplicationServicePodLogsParams,
  ApplicationServiceResourceTreeParams,
  ApplicationServiceRevisionChartDetailsParams,
  ApplicationServiceRevisionMetadataParams,
  ApplicationServiceRollbackParams,
  ApplicationServiceRunResourceActionParams,
  ApplicationServiceSyncParams,
  ApplicationServiceTerminateOperationParams,
  ApplicationServiceUpdateParams,
  ApplicationServiceUpdateSpecParams,
  ApplicationServiceWatchParams,
  ApplicationServiceWatchResourceTreeParams,
} from './types';

export class ApplicationServiceApi extends BaseApi {
  async applicationServiceCreate(
    params: ApplicationServiceCreateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1Application> {
    const url = this.buildUrl('/api/v1/applications');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.POST,
      url,
      params: params?.query,
      data: params.body,
    });
    return new V1alpha1Application(result);
  }

  async applicationServiceDelete(
    params: ApplicationServiceDeleteParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<any> {
    const url = this.buildUrl('/api/v1/applications/{name}', {
      params: params.path,
      required: ['name'],
    });

    return this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.DELETE,
      url,
      params: params?.query,
    });
  }

  async applicationServiceDeleteResource(
    params: ApplicationServiceDeleteResourceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<any> {
    const url = this.buildUrl('/api/v1/applications/{name}/resource', {
      params: params.path,
      required: ['name'],
    });

    return this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.DELETE,
      url,
      params: params?.query,
    });
  }

  async applicationServiceGet(
    params: ApplicationServiceGetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1Application> {
    const url = this.buildUrl('/api/v1/applications/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new V1alpha1Application(result);
  }

  async applicationServiceGetApplicationSyncWindows(
    params: ApplicationServiceGetApplicationSyncWindowsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<ApplicationApplicationSyncWindowsResponse> {
    const url = this.buildUrl('/api/v1/applications/{name}/syncwindows', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new ApplicationApplicationSyncWindowsResponse(result);
  }

  async applicationServiceGetManifests(
    params: ApplicationServiceGetManifestsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<RepositoryManifestResponse> {
    const url = this.buildUrl('/api/v1/applications/{name}/manifests', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new RepositoryManifestResponse(result);
  }

  async applicationServiceGetManifestsWithFiles(
    params: ApplicationServiceGetManifestsWithFilesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<RepositoryManifestResponse> {
    const url = this.buildUrl('/api/v1/applications/manifestsWithFiles');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.POST,
      url,
      data: params.body,
    });
    return new RepositoryManifestResponse(result);
  }

  async applicationServiceGetResource(
    params: ApplicationServiceGetResourceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<ApplicationApplicationResourceResponse> {
    const url = this.buildUrl('/api/v1/applications/{name}/resource', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new ApplicationApplicationResourceResponse(result);
  }

  async applicationServiceList(
    params?: ApplicationServiceListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1ApplicationList> {
    const url = this.buildUrl('/api/v1/applications');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new V1alpha1ApplicationList(result);
  }

  async applicationServiceListLinks(
    params: ApplicationServiceListLinksParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<ApplicationLinksResponse> {
    const url = this.buildUrl('/api/v1/applications/{name}/links', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new ApplicationLinksResponse(result);
  }

  async applicationServiceListResourceActions(
    params: ApplicationServiceListResourceActionsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<ApplicationResourceActionsListResponse> {
    const url = this.buildUrl('/api/v1/applications/{name}/resource/actions', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new ApplicationResourceActionsListResponse(result);
  }

  async applicationServiceListResourceEvents(
    params: ApplicationServiceListResourceEventsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1EventList> {
    const url = this.buildUrl('/api/v1/applications/{name}/events', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new V1EventList(result);
  }

  async applicationServiceListResourceLinks(
    params: ApplicationServiceListResourceLinksParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<ApplicationLinksResponse> {
    const url = this.buildUrl('/api/v1/applications/{name}/resource/links', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new ApplicationLinksResponse(result);
  }

  async applicationServiceManagedResources(
    params: ApplicationServiceManagedResourcesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<ApplicationManagedResourcesResponse> {
    const url = this.buildUrl('/api/v1/applications/{applicationName}/managed-resources', {
      params: params.path,
      required: ['applicationName'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new ApplicationManagedResourcesResponse(result);
  }

  async applicationServicePatch(
    params: ApplicationServicePatchParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1Application> {
    const url = this.buildUrl('/api/v1/applications/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.PATCH,
      url,
      data: params.body,
    });
    return new V1alpha1Application(result);
  }

  async applicationServicePatchResource(
    params: ApplicationServicePatchResourceParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<ApplicationApplicationResourceResponse> {
    const url = this.buildUrl('/api/v1/applications/{name}/resource', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.POST,
      url,
      params: params?.query,
      data: params.body,
    });
    return new ApplicationApplicationResourceResponse(result);
  }

  async applicationServicePodLogs(
    params: ApplicationServicePodLogsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<StreamResultOfApplicationLogEntry> {
    const url = this.buildUrl('/api/v1/applications/{name}/pods/{podName}/logs', {
      params: params.path,
      required: ['name', 'podName'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new StreamResultOfApplicationLogEntry(result);
  }

  async applicationServicePodLogs2(
    params: ApplicationServicePodLogs2Params,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<StreamResultOfApplicationLogEntry> {
    const url = this.buildUrl('/api/v1/applications/{name}/logs', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new StreamResultOfApplicationLogEntry(result);
  }

  async applicationServiceResourceTree(
    params: ApplicationServiceResourceTreeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1ApplicationTree> {
    const url = this.buildUrl('/api/v1/applications/{applicationName}/resource-tree', {
      params: params.path,
      required: ['applicationName'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new V1alpha1ApplicationTree(result);
  }

  async applicationServiceRevisionChartDetails(
    params: ApplicationServiceRevisionChartDetailsParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1ChartDetails> {
    const url = this.buildUrl('/api/v1/applications/{name}/revisions/{revision}/chartdetails', {
      params: params.path,
      required: ['name', 'revision'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new V1alpha1ChartDetails(result);
  }

  async applicationServiceRevisionMetadata(
    params: ApplicationServiceRevisionMetadataParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1RevisionMetadata> {
    const url = this.buildUrl('/api/v1/applications/{name}/revisions/{revision}/metadata', {
      params: params.path,
      required: ['name', 'revision'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new V1alpha1RevisionMetadata(result);
  }

  async applicationServiceRollback(
    params: ApplicationServiceRollbackParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1Application> {
    const url = this.buildUrl('/api/v1/applications/{name}/rollback', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.POST,
      url,
      data: params.body,
    });
    return new V1alpha1Application(result);
  }

  async applicationServiceRunResourceAction(
    params: ApplicationServiceRunResourceActionParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<any> {
    const url = this.buildUrl('/api/v1/applications/{name}/resource/actions', {
      params: params.path,
      required: ['name'],
    });

    return this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.POST,
      url,
      params: params?.query,
      data: params.body,
    });
  }

  async applicationServiceSync(
    params: ApplicationServiceSyncParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1Application> {
    const url = this.buildUrl('/api/v1/applications/{name}/sync', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.POST,
      url,
      data: params.body,
    });
    return new V1alpha1Application(result);
  }

  async applicationServiceTerminateOperation(
    params: ApplicationServiceTerminateOperationParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<any> {
    const url = this.buildUrl('/api/v1/applications/{name}/operation', {
      params: params.path,
      required: ['name'],
    });

    return this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.DELETE,
      url,
      params: params?.query,
    });
  }

  async applicationServiceUpdate(
    params: ApplicationServiceUpdateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1Application> {
    const url = this.buildUrl('/api/v1/applications/{application.metadata.name}', {
      params: params.path,
      required: ['application.metadata.name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.PUT,
      url,
      params: params?.query,
      data: params.body,
    });
    return new V1alpha1Application(result);
  }

  async applicationServiceUpdateSpec(
    params: ApplicationServiceUpdateSpecParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1ApplicationSpec> {
    const url = this.buildUrl('/api/v1/applications/{name}/spec', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.PUT,
      url,
      params: params?.query,
      data: params.body,
    });
    return new V1alpha1ApplicationSpec(result);
  }

  async applicationServiceWatch(
    params?: ApplicationServiceWatchParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<StreamResultOfV1alpha1ApplicationWatchEvent> {
    const url = this.buildUrl('/api/v1/stream/applications');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new StreamResultOfV1alpha1ApplicationWatchEvent(result);
  }

  async applicationServiceWatchResourceTree(
    params: ApplicationServiceWatchResourceTreeParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<StreamResultOfV1alpha1ApplicationTree> {
    const url = this.buildUrl('/api/v1/stream/applications/{applicationName}/resource-tree', {
      params: params.path,
      required: ['applicationName'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new StreamResultOfV1alpha1ApplicationTree(result);
  }
}

export default ApplicationServiceApi;
