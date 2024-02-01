import { BaseModel } from '../types';
import type { V1alpha1TLSClientConfigModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1TLSClientConfigModel extends BaseModel {
  caData?: string;
  certData?: string;
  // Insecure specifies that the server should be accessed without verifying the TLS certificate. For testing only.
  insecure?: boolean;
  keyData?: string;
  // ServerName is passed to the server for SNI and is used in the client to check server certificates against. If ServerName is empty, the hostname used to contact the server is used.
  serverName?: string;

  constructor(data: V1alpha1TLSClientConfigModelOptions) {
    super();
    validate(data);
    this.caData = data.caData;
    this.certData = data.certData;
    this.insecure = data.insecure;
    this.keyData = data.keyData;
    this.serverName = data.serverName;
  }

  static create(data: V1alpha1TLSClientConfigModelOptions): V1alpha1TLSClientConfigModel {
    return new V1alpha1TLSClientConfigModel(data);
  }

  toObject(): Partial<this> {
    return {
      caData: this.caData,
      certData: this.certData,
      insecure: this.insecure,
      keyData: this.keyData,
      serverName: this.serverName,
    } as Partial<this>;
  }
}

export default V1alpha1TLSClientConfigModel;
