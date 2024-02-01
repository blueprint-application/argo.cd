import { BaseModel } from '../types';
import type { AccountCreateTokenResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class AccountCreateTokenResponseModel extends BaseModel {
  token?: string;

  constructor(data: AccountCreateTokenResponseModelOptions) {
    super();
    validate(data);
    this.token = data.token;
  }

  static create(data: AccountCreateTokenResponseModelOptions): AccountCreateTokenResponseModel {
    return new AccountCreateTokenResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      token: this.token,
    } as Partial<this>;
  }
}

export default AccountCreateTokenResponseModel;
