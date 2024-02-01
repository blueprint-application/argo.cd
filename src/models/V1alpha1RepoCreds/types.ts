export interface V1alpha1RepoCredsModelOptions {
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
  type?: string;
  url?: string;
  username?: string;
}
