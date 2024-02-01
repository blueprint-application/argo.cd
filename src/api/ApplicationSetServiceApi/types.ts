import { V1alpha1ApplicationSetModelOptions as V1alpha1ApplicationSet } from '../../models';
import { BaseParams } from '../base';

export interface ApplicationSetServiceCreateParams extends BaseParams {
  query?: {
    upsert?: boolean;
  };
  body: V1alpha1ApplicationSet;
}

export interface ApplicationSetServiceDeleteParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    appsetNamespace?: string;
  };
}

export interface ApplicationSetServiceGetParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    appsetNamespace?: string;
  };
}

export interface ApplicationSetServiceListParams extends BaseParams {
  query?: {
    projects?: Array<string>;
    selector?: string;
    appsetNamespace?: string;
  };
}

export default {};
