import { AxiosRequestConfig } from 'axios';
import {
  SessionGetUserInfoResponseModel as SessionGetUserInfoResponse,
  SessionSessionResponseModel as SessionSessionResponse,
} from '../../models';
import { BaseApi } from '../base';
import { SessionServiceCreateParams } from './types';

export class SessionServiceApi extends BaseApi {
  async sessionServiceCreate(
    params: SessionServiceCreateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<SessionSessionResponse> {
    const url = this.buildUrl('/api/v1/session');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.POST,
      url,
      data: params.body,
    });
    return new SessionSessionResponse(result);
  }

  async sessionServiceDelete(options?: Partial<AxiosRequestConfig>): Promise<SessionSessionResponse> {
    const url = this.buildUrl('/api/v1/session');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.DELETE,
      url,
    });
    return new SessionSessionResponse(result);
  }

  async sessionServiceGetUserInfo(options?: Partial<AxiosRequestConfig>): Promise<SessionGetUserInfoResponse> {
    const url = this.buildUrl('/api/v1/session/userinfo');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
    });
    return new SessionGetUserInfoResponse(result);
  }
}

export default SessionServiceApi;
