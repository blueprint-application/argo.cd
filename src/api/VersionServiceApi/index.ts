import { AxiosRequestConfig } from 'axios';
import { VersionVersionMessageModel as VersionVersionMessage } from '../../models';
import { BaseApi } from '../base';
import {} from './types';

export class VersionServiceApi extends BaseApi {
  async versionServiceVersion(options?: Partial<AxiosRequestConfig>): Promise<VersionVersionMessage> {
    const url = this.buildUrl('/api/version');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
    });
    return new VersionVersionMessage(result);
  }
}

export default VersionServiceApi;
