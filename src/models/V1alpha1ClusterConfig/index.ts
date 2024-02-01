import { V1alpha1AWSAuthConfigModelOptions as V1alpha1AWSAuthConfig } from '../V1alpha1AWSAuthConfig';
import { V1alpha1ExecProviderConfigModelOptions as V1alpha1ExecProviderConfig } from '../V1alpha1ExecProviderConfig';
import { V1alpha1TLSClientConfigModelOptions as V1alpha1TLSClientConfig } from '../V1alpha1TLSClientConfig';
import { BaseModel } from '../types';
import type { V1alpha1ClusterConfigModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ClusterConfigModel extends BaseModel {
  awsAuthConfig?: V1alpha1AWSAuthConfig;
  // Server requires Bearer authentication. This client will not attempt to use refresh tokens for an OAuth2 flow. TODO: demonstrate an OAuth2 compatible client.
  bearerToken?: string;
  execProviderConfig?: V1alpha1ExecProviderConfig;
  password?: string;
  tlsClientConfig?: V1alpha1TLSClientConfig;
  username?: string;

  constructor(data: V1alpha1ClusterConfigModelOptions) {
    super();
    validate(data);
    this.awsAuthConfig = data.awsAuthConfig;
    this.bearerToken = data.bearerToken;
    this.execProviderConfig = data.execProviderConfig;
    this.password = data.password;
    this.tlsClientConfig = data.tlsClientConfig;
    this.username = data.username;
  }

  static create(data: V1alpha1ClusterConfigModelOptions): V1alpha1ClusterConfigModel {
    return new V1alpha1ClusterConfigModel(data);
  }

  toObject(): Partial<this> {
    return {
      awsAuthConfig: this.awsAuthConfig,
      bearerToken: this.bearerToken,
      execProviderConfig: this.execProviderConfig,
      password: this.password,
      tlsClientConfig: this.tlsClientConfig,
      username: this.username,
    } as Partial<this>;
  }
}

export default V1alpha1ClusterConfigModel;
