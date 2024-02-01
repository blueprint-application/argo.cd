import { BaseModel } from '../types';
import type { V1alpha1RepoCredsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1RepoCredsModel extends BaseModel {
  enableOCI?: boolean;
  forceHttpBasicAuth?: boolean;
  gcpServiceAccountKey?: string;
  githubAppEnterpriseBaseUrl?: string;
  githubAppID?: string;
  githubAppInstallationID?: string;
  githubAppPrivateKey?: string;
  password?: string;
  proxy?: string;
  sshPrivateKey?: string;
  tlsClientCertData?: string;
  tlsClientCertKey?: string;
  // Type specifies the type of the repoCreds. Can be either \"git\" or \"helm. \"git\" is assumed if empty or absent.
  type?: string;
  url?: string;
  username?: string;

  constructor(data: V1alpha1RepoCredsModelOptions) {
    super();
    validate(data);
    this.enableOCI = data.enableOCI;
    this.forceHttpBasicAuth = data.forceHttpBasicAuth;
    this.gcpServiceAccountKey = data.gcpServiceAccountKey;
    this.githubAppEnterpriseBaseUrl = data.githubAppEnterpriseBaseUrl;
    this.githubAppID = data.githubAppID;
    this.githubAppInstallationID = data.githubAppInstallationID;
    this.githubAppPrivateKey = data.githubAppPrivateKey;
    this.password = data.password;
    this.proxy = data.proxy;
    this.sshPrivateKey = data.sshPrivateKey;
    this.tlsClientCertData = data.tlsClientCertData;
    this.tlsClientCertKey = data.tlsClientCertKey;
    this.type = data.type;
    this.url = data.url;
    this.username = data.username;
  }

  static create(data: V1alpha1RepoCredsModelOptions): V1alpha1RepoCredsModel {
    return new V1alpha1RepoCredsModel(data);
  }

  toObject(): Partial<this> {
    return {
      enableOCI: this.enableOCI,
      forceHttpBasicAuth: this.forceHttpBasicAuth,
      gcpServiceAccountKey: this.gcpServiceAccountKey,
      githubAppEnterpriseBaseUrl: this.githubAppEnterpriseBaseUrl,
      githubAppID: this.githubAppID,
      githubAppInstallationID: this.githubAppInstallationID,
      githubAppPrivateKey: this.githubAppPrivateKey,
      password: this.password,
      proxy: this.proxy,
      sshPrivateKey: this.sshPrivateKey,
      tlsClientCertData: this.tlsClientCertData,
      tlsClientCertKey: this.tlsClientCertKey,
      type: this.type,
      url: this.url,
      username: this.username,
    } as Partial<this>;
  }
}

export default V1alpha1RepoCredsModel;
