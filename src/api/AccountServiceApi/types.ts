import {
  AccountCreateTokenRequestModelOptions as AccountCreateTokenRequest,
  AccountUpdatePasswordRequestModelOptions as AccountUpdatePasswordRequest,
} from '../../models';
import { BaseParams } from '../base';

export interface AccountServiceCanIParams extends BaseParams {
  path: {
    resource: string;
    action: string;
    subresource: string;
  };
}

export interface AccountServiceCreateTokenParams extends BaseParams {
  path: {
    name: string;
  };
  body: AccountCreateTokenRequest;
}

export interface AccountServiceDeleteTokenParams extends BaseParams {
  path: {
    name: string;
    id: string;
  };
}

export interface AccountServiceGetAccountParams extends BaseParams {
  path: {
    name: string;
  };
}

export interface AccountServiceUpdatePasswordParams extends BaseParams {
  body: AccountUpdatePasswordRequest;
}

export default {};
