import { AxiosRequestConfig } from 'axios';
import {
  AccountAccountModel as AccountAccount,
  AccountAccountsListModel as AccountAccountsList,
  AccountCanIResponseModel as AccountCanIResponse,
  AccountCreateTokenResponseModel as AccountCreateTokenResponse,
} from '../../models';
import { BaseApi } from '../base';
import {
  AccountServiceCanIParams,
  AccountServiceCreateTokenParams,
  AccountServiceDeleteTokenParams,
  AccountServiceGetAccountParams,
  AccountServiceUpdatePasswordParams,
} from './types';

export class AccountServiceApi extends BaseApi {
  async accountServiceCanI(
    params: AccountServiceCanIParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<AccountCanIResponse> {
    const url = this.buildUrl('/api/v1/account/can-i/{resource}/{action}/{subresource}', {
      params: params.path,
      required: ['resource', 'action', 'subresource'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
    });
    return new AccountCanIResponse(result);
  }

  async accountServiceCreateToken(
    params: AccountServiceCreateTokenParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<AccountCreateTokenResponse> {
    const url = this.buildUrl('/api/v1/account/{name}/token', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.POST,
      url,
      data: params.body,
    });
    return new AccountCreateTokenResponse(result);
  }

  async accountServiceDeleteToken(
    params: AccountServiceDeleteTokenParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<any> {
    const url = this.buildUrl('/api/v1/account/{name}/token/{id}', {
      params: params.path,
      required: ['name', 'id'],
    });

    return this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.DELETE,
      url,
    });
  }

  async accountServiceGetAccount(
    params: AccountServiceGetAccountParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<AccountAccount> {
    const url = this.buildUrl('/api/v1/account/{name}', {
      params: params.path,
      required: ['name'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
    });
    return new AccountAccount(result);
  }

  async accountServiceListAccounts(options?: Partial<AxiosRequestConfig>): Promise<AccountAccountsList> {
    const url = this.buildUrl('/api/v1/account');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
    });
    return new AccountAccountsList(result);
  }

  async accountServiceUpdatePassword(
    params: AccountServiceUpdatePasswordParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<any> {
    const url = this.buildUrl('/api/v1/account/password');

    return this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.PUT,
      url,
      data: params.body,
    });
  }
}

export default AccountServiceApi;
