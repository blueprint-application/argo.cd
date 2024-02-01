import { BaseModel } from '../types';
import type { AccountTokenModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class AccountTokenModel extends BaseModel {
  expiresAt?: string;
  id?: string;
  issuedAt?: string;

  constructor(data: AccountTokenModelOptions) {
    super();
    validate(data);
    this.expiresAt = data.expiresAt;
    this.id = data.id;
    this.issuedAt = data.issuedAt;
  }

  static create(data: AccountTokenModelOptions): AccountTokenModel {
    return new AccountTokenModel(data);
  }

  toObject(): Partial<this> {
    return {
      expiresAt: this.expiresAt,
      id: this.id,
      issuedAt: this.issuedAt,
    } as Partial<this>;
  }
}

export default AccountTokenModel;
