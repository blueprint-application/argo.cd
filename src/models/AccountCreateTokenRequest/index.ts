import { BaseModel } from '../types';
import type { AccountCreateTokenRequestModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class AccountCreateTokenRequestModel extends BaseModel {
  expiresIn?: string;
  id?: string;
  name?: string;

  constructor(data: AccountCreateTokenRequestModelOptions) {
    super();
    validate(data);
    this.expiresIn = data.expiresIn;
    this.id = data.id;
    this.name = data.name;
  }

  static create(data: AccountCreateTokenRequestModelOptions): AccountCreateTokenRequestModel {
    return new AccountCreateTokenRequestModel(data);
  }

  toObject(): Partial<this> {
    return {
      expiresIn: this.expiresIn,
      id: this.id,
      name: this.name,
    } as Partial<this>;
  }
}

export default AccountCreateTokenRequestModel;
