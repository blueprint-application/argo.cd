import { V1alpha1ClusterModelOptions as V1alpha1Cluster } from '../../models';
import { BaseParams } from '../base';

export interface ClusterServiceCreateParams extends BaseParams {
  query?: {
    upsert?: boolean;
  };
  body: V1alpha1Cluster;
}

export interface ClusterServiceDeleteParams extends BaseParams {
  path: {
    'id.value': string;
  };
  query?: {
    server?: string;
    name?: string;
    'id.type'?: string;
  };
}

export interface ClusterServiceGetParams extends BaseParams {
  path: {
    'id.value': string;
  };
  query?: {
    server?: string;
    name?: string;
    'id.type'?: string;
  };
}

export interface ClusterServiceInvalidateCacheParams extends BaseParams {
  path: {
    'id.value': string;
  };
}

export interface ClusterServiceListParams extends BaseParams {
  query?: {
    server?: string;
    name?: string;
    'id.type'?: string;
    'id.value'?: string;
  };
}

export interface ClusterServiceRotateAuthParams extends BaseParams {
  path: {
    'id.value': string;
  };
}

export interface ClusterServiceUpdateParams extends BaseParams {
  path: {
    'id.value': string;
  };
  query?: {
    updatedFields?: Array<string>;
    'id.type'?: string;
  };
  body: V1alpha1Cluster;
}

export default {};
