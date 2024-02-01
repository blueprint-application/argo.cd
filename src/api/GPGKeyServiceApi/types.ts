import { V1alpha1GnuPGPublicKeyModelOptions as V1alpha1GnuPGPublicKey } from '../../models';
import { BaseParams } from '../base';

export interface GPGKeyServiceCreateParams extends BaseParams {
  query?: {
    upsert?: boolean;
  };
  body: V1alpha1GnuPGPublicKey;
}

export interface GPGKeyServiceDeleteParams extends BaseParams {
  query?: {
    keyID?: string;
  };
}

export interface GPGKeyServiceGetParams extends BaseParams {
  path: {
    keyID: string;
  };
}

export interface GPGKeyServiceListParams extends BaseParams {
  query?: {
    keyID?: string;
  };
}

export default {};
