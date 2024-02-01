import { AxiosRequestConfig } from 'axios';
import {
  GpgkeyGnuPGPublicKeyCreateResponseModel as GpgkeyGnuPGPublicKeyCreateResponse,
  V1alpha1GnuPGPublicKeyModel as V1alpha1GnuPGPublicKey,
  V1alpha1GnuPGPublicKeyListModel as V1alpha1GnuPGPublicKeyList,
} from '../../models';
import { BaseApi } from '../base';
import {
  GPGKeyServiceCreateParams,
  GPGKeyServiceDeleteParams,
  GPGKeyServiceGetParams,
  GPGKeyServiceListParams,
} from './types';

export class GPGKeyServiceApi extends BaseApi {
  async gPGKeyServiceCreate(
    params: GPGKeyServiceCreateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<GpgkeyGnuPGPublicKeyCreateResponse> {
    const url = this.buildUrl('/api/v1/gpgkeys');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.POST,
      url,
      params: params?.query,
      data: params.body,
    });
    return new GpgkeyGnuPGPublicKeyCreateResponse(result);
  }

  async gPGKeyServiceDelete(params?: GPGKeyServiceDeleteParams, options?: Partial<AxiosRequestConfig>): Promise<any> {
    const url = this.buildUrl('/api/v1/gpgkeys');

    return this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.DELETE,
      url,
      params: params?.query,
    });
  }

  async gPGKeyServiceGet(
    params: GPGKeyServiceGetParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1GnuPGPublicKey> {
    const url = this.buildUrl('/api/v1/gpgkeys/{keyID}', {
      params: params.path,
      required: ['keyID'],
    });

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
    });
    return new V1alpha1GnuPGPublicKey(result);
  }

  async gPGKeyServiceList(
    params?: GPGKeyServiceListParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1GnuPGPublicKeyList> {
    const url = this.buildUrl('/api/v1/gpgkeys');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new V1alpha1GnuPGPublicKeyList(result);
  }
}

export default GPGKeyServiceApi;
