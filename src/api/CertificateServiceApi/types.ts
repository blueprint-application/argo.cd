import { V1alpha1RepositoryCertificateListModelOptions as V1alpha1RepositoryCertificateList } from '../../models';
import { BaseParams } from '../base';

export interface CertificateServiceCreateCertificateParams extends BaseParams {
  query?: {
    upsert?: boolean;
  };
  body: V1alpha1RepositoryCertificateList;
}

export interface CertificateServiceDeleteCertificateParams extends BaseParams {
  query?: {
    hostNamePattern?: string;
    certType?: string;
    certSubType?: string;
  };
}

export interface CertificateServiceListCertificatesParams extends BaseParams {
  query?: {
    hostNamePattern?: string;
    certType?: string;
    certSubType?: string;
  };
}

export default {};
