import { V1alpha1ConnectionStateModelOptions as V1alpha1ConnectionState } from '../V1alpha1ConnectionState';
import { BaseModel } from '../types';
import type { V1alpha1RepositoryModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1RepositoryModel extends BaseModel {
  connectionState?: V1alpha1ConnectionState;
  // EnableLFS specifies whether git-lfs support should be enabled for this repo. Only valid for Git repositories.
  enableLfs?: boolean;
  enableOCI?: boolean;
  forceHttpBasicAuth?: boolean;
  gcpServiceAccountKey?: string;
  githubAppEnterpriseBaseUrl?: string;
  githubAppID?: string;
  githubAppInstallationID?: string;
  githubAppPrivateKey?: string;
  inheritedCreds?: boolean;
  insecure?: boolean;
  insecureIgnoreHostKey?: boolean;
  name?: string;
  password?: string;
  project?: string;
  proxy?: string;
  repo?: string;
  // SSHPrivateKey contains the PEM data for authenticating at the repo server. Only used with Git repos.
  sshPrivateKey?: string;
  tlsClientCertData?: string;
  tlsClientCertKey?: string;
  // Type specifies the type of the repo. Can be either \"git\" or \"helm. \"git\" is assumed if empty or absent.
  type?: string;
  username?: string;

  constructor(data: V1alpha1RepositoryModelOptions) {
    super();
    validate(data);
    this.connectionState = data.connectionState;
    this.enableLfs = data.enableLfs;
    this.enableOCI = data.enableOCI;
    this.forceHttpBasicAuth = data.forceHttpBasicAuth;
    this.gcpServiceAccountKey = data.gcpServiceAccountKey;
    this.githubAppEnterpriseBaseUrl = data.githubAppEnterpriseBaseUrl;
    this.githubAppID = data.githubAppID;
    this.githubAppInstallationID = data.githubAppInstallationID;
    this.githubAppPrivateKey = data.githubAppPrivateKey;
    this.inheritedCreds = data.inheritedCreds;
    this.insecure = data.insecure;
    this.insecureIgnoreHostKey = data.insecureIgnoreHostKey;
    this.name = data.name;
    this.password = data.password;
    this.project = data.project;
    this.proxy = data.proxy;
    this.repo = data.repo;
    this.sshPrivateKey = data.sshPrivateKey;
    this.tlsClientCertData = data.tlsClientCertData;
    this.tlsClientCertKey = data.tlsClientCertKey;
    this.type = data.type;
    this.username = data.username;
  }

  static create(data: V1alpha1RepositoryModelOptions): V1alpha1RepositoryModel {
    return new V1alpha1RepositoryModel(data);
  }

  toObject(): Partial<this> {
    return {
      connectionState: this.connectionState,
      enableLfs: this.enableLfs,
      enableOCI: this.enableOCI,
      forceHttpBasicAuth: this.forceHttpBasicAuth,
      gcpServiceAccountKey: this.gcpServiceAccountKey,
      githubAppEnterpriseBaseUrl: this.githubAppEnterpriseBaseUrl,
      githubAppID: this.githubAppID,
      githubAppInstallationID: this.githubAppInstallationID,
      githubAppPrivateKey: this.githubAppPrivateKey,
      inheritedCreds: this.inheritedCreds,
      insecure: this.insecure,
      insecureIgnoreHostKey: this.insecureIgnoreHostKey,
      name: this.name,
      password: this.password,
      project: this.project,
      proxy: this.proxy,
      repo: this.repo,
      sshPrivateKey: this.sshPrivateKey,
      tlsClientCertData: this.tlsClientCertData,
      tlsClientCertKey: this.tlsClientCertKey,
      type: this.type,
      username: this.username,
    } as Partial<this>;
  }
}

export default V1alpha1RepositoryModel;
