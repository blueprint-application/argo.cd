import { V1alpha1RepoCredsModelOptions as V1alpha1RepoCreds } from '../../models';
import { BaseParams } from '../base';

export interface RepoCredsServiceCreateRepositoryCredentialsParams extends BaseParams {
  query?: {
    upsert?: boolean;
  };
  body: V1alpha1RepoCreds;
}

export interface RepoCredsServiceDeleteRepositoryCredentialsParams extends BaseParams {
  path: {
    url: string;
  };
}

export interface RepoCredsServiceListRepositoryCredentialsParams extends BaseParams {
  query?: {
    url?: string;
  };
}

export interface RepoCredsServiceUpdateRepositoryCredentialsParams extends BaseParams {
  path: {
    'creds.url': string;
  };
  body: V1alpha1RepoCreds;
}

export default {};
