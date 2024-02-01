import { AxiosRequestConfig } from 'axios';
import {
  ClusterSettingsModel as ClusterSettings,
  ClusterSettingsPluginsResponseModel as ClusterSettingsPluginsResponse,
} from '../../models';
import { BaseApi } from '../base';
import {} from './types';

export class SettingsServiceApi extends BaseApi {
  async settingsServiceGet(options?: Partial<AxiosRequestConfig>): Promise<ClusterSettings> {
    const url = this.buildUrl('/api/v1/settings');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
    });
    return new ClusterSettings(result);
  }

  async settingsServiceGetPlugins(options?: Partial<AxiosRequestConfig>): Promise<ClusterSettingsPluginsResponse> {
    const url = this.buildUrl('/api/v1/settings/plugins');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
    });
    return new ClusterSettingsPluginsResponse(result);
  }
}

export default SettingsServiceApi;
