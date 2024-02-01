import {
  RepositoryRepoAppDetailsQueryModelOptions as RepositoryRepoAppDetailsQuery,
  V1alpha1RepositoryModelOptions as V1alpha1Repository,
} from '../../models';
import { BaseParams } from '../base';

export interface RepositoryServiceCreateRepositoryParams extends BaseParams {
  query?: {
    upsert?: boolean;
    credsOnly?: boolean;
  };
  body: V1alpha1Repository;
}

export interface RepositoryServiceDeleteRepositoryParams extends BaseParams {
  path: {
    repo: string;
  };
  query?: {
    forceRefresh?: boolean;
  };
}

export interface RepositoryServiceGetParams extends BaseParams {
  path: {
    repo: string;
  };
  query?: {
    forceRefresh?: boolean;
  };
}

export interface RepositoryServiceGetAppDetailsParams extends BaseParams {
  path: {
    'source.repoURL': string;
  };
  body: RepositoryRepoAppDetailsQuery;
}

export interface RepositoryServiceGetHelmChartsParams extends BaseParams {
  path: {
    repo: string;
  };
  query?: {
    forceRefresh?: boolean;
  };
}

export interface RepositoryServiceListAppsParams extends BaseParams {
  path: {
    repo: string;
  };
  query?: {
    revision?: string;
    appName?: string;
    appProject?: string;
  };
}

export interface RepositoryServiceListRefsParams extends BaseParams {
  path: {
    repo: string;
  };
  query?: {
    forceRefresh?: boolean;
  };
}

export interface RepositoryServiceListRepositoriesParams extends BaseParams {
  query?: {
    repo?: string;
    forceRefresh?: boolean;
  };
}

export interface RepositoryServiceUpdateRepositoryParams extends BaseParams {
  path: {
    'repo.repo': string;
  };
  body: V1alpha1Repository;
}

export interface RepositoryServiceValidateAccessParams extends BaseParams {
  path: {
    repo: string;
  };
  query?: {
    username?: string;
    password?: string;
    sshPrivateKey?: string;
    insecure?: boolean;
    tlsClientCertData?: string;
    tlsClientCertKey?: string;
    type?: string;
    name?: string;
    enableOci?: boolean;
    githubAppPrivateKey?: string;
    githubAppID?: string;
    githubAppInstallationID?: string;
    githubAppEnterpriseBaseUrl?: string;
    proxy?: string;
    project?: string;
    gcpServiceAccountKey?: string;
    forceHttpBasicAuth?: boolean;
  };
  body: string;
}

export default {};
