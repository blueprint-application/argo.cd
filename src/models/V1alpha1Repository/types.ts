import { V1alpha1ConnectionStateModelOptions as V1alpha1ConnectionState } from '../V1alpha1ConnectionState';

export interface V1alpha1RepositoryModelOptions {
  connectionState?: V1alpha1ConnectionState;
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
  sshPrivateKey?: string;
  tlsClientCertData?: string;
  tlsClientCertKey?: string;
  type?: string;
  username?: string;
}
