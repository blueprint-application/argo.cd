import { BaseModel } from '../types';
import type { AccountCanIResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class AccountCanIResponseModel extends BaseModel {
  value?: string;

  constructor(data: AccountCanIResponseModelOptions) {
    super();
    validate(data);
    this.value = data.value;
  }

  static create(data: AccountCanIResponseModelOptions): AccountCanIResponseModel {
    return new AccountCanIResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      value: this.value,
    } as Partial<this>;
  }
}

export default AccountCanIResponseModel;
