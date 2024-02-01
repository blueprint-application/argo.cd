import { BaseModel } from '../types';
import type { AccountUpdatePasswordRequestModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class AccountUpdatePasswordRequestModel extends BaseModel {
  currentPassword?: string;
  name?: string;
  newPassword?: string;

  constructor(data: AccountUpdatePasswordRequestModelOptions) {
    super();
    validate(data);
    this.currentPassword = data.currentPassword;
    this.name = data.name;
    this.newPassword = data.newPassword;
  }

  static create(data: AccountUpdatePasswordRequestModelOptions): AccountUpdatePasswordRequestModel {
    return new AccountUpdatePasswordRequestModel(data);
  }

  toObject(): Partial<this> {
    return {
      currentPassword: this.currentPassword,
      name: this.name,
      newPassword: this.newPassword,
    } as Partial<this>;
  }
}

export default AccountUpdatePasswordRequestModel;
