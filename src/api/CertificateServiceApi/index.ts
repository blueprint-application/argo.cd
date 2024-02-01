import { AxiosRequestConfig } from 'axios';
import { V1alpha1RepositoryCertificateListModel as V1alpha1RepositoryCertificateList } from '../../models';
import { BaseApi } from '../base';
import {
  CertificateServiceCreateCertificateParams,
  CertificateServiceDeleteCertificateParams,
  CertificateServiceListCertificatesParams,
} from './types';

export class CertificateServiceApi extends BaseApi {
  async certificateServiceCreateCertificate(
    params: CertificateServiceCreateCertificateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1RepositoryCertificateList> {
    const url = this.buildUrl('/api/v1/certificates');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.POST,
      url,
      params: params?.query,
      data: params.body,
    });
    return new V1alpha1RepositoryCertificateList(result);
  }

  async certificateServiceDeleteCertificate(
    params?: CertificateServiceDeleteCertificateParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1RepositoryCertificateList> {
    const url = this.buildUrl('/api/v1/certificates');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.DELETE,
      url,
      params: params?.query,
    });
    return new V1alpha1RepositoryCertificateList(result);
  }

  async certificateServiceListCertificates(
    params?: CertificateServiceListCertificatesParams,
    options?: Partial<AxiosRequestConfig>,
  ): Promise<V1alpha1RepositoryCertificateList> {
    const url = this.buildUrl('/api/v1/certificates');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
      params: params?.query,
    });
    return new V1alpha1RepositoryCertificateList(result);
  }
}

export default CertificateServiceApi;
