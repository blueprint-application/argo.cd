import { AccountTokenModelOptions as AccountToken } from '../AccountToken';
import { BaseModel } from '../types';
import type { AccountAccountModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class AccountAccountModel extends BaseModel {
  capabilities?: Array<string>;
  enabled?: boolean;
  name?: string;
  tokens?: Array<AccountToken>;

  constructor(data: AccountAccountModelOptions) {
    super();
    validate(data);
    this.capabilities = data.capabilities;
    this.enabled = data.enabled;
    this.name = data.name;
    this.tokens = data.tokens;
  }

  static create(data: AccountAccountModelOptions): AccountAccountModel {
    return new AccountAccountModel(data);
  }

  toObject(): Partial<this> {
    return {
      capabilities: this.capabilities,
      enabled: this.enabled,
      name: this.name,
      tokens: this.tokens,
    } as Partial<this>;
  }
}

export default AccountAccountModel;
