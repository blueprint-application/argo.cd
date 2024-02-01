import { BaseModel } from '../types';
import type { V1alpha1RepositoryCertificateModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1RepositoryCertificateModel extends BaseModel {
  certData?: string;
  certInfo?: string;
  certSubType?: string;
  certType?: string;
  serverName?: string;

  constructor(data: V1alpha1RepositoryCertificateModelOptions) {
    super();
    validate(data);
    this.certData = data.certData;
    this.certInfo = data.certInfo;
    this.certSubType = data.certSubType;
    this.certType = data.certType;
    this.serverName = data.serverName;
  }

  static create(data: V1alpha1RepositoryCertificateModelOptions): V1alpha1RepositoryCertificateModel {
    return new V1alpha1RepositoryCertificateModel(data);
  }

  toObject(): Partial<this> {
    return {
      certData: this.certData,
      certInfo: this.certInfo,
      certSubType: this.certSubType,
      certType: this.certType,
      serverName: this.serverName,
    } as Partial<this>;
  }
}

export default V1alpha1RepositoryCertificateModel;
