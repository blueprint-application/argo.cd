import { AccountAccountModelOptions as AccountAccount } from '../AccountAccount';
import { BaseModel } from '../types';
import type { AccountAccountsListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class AccountAccountsListModel extends BaseModel {
  items?: Array<AccountAccount>;

  constructor(data: AccountAccountsListModelOptions) {
    super();
    validate(data);
    this.items = data.items;
  }

  static create(data: AccountAccountsListModelOptions): AccountAccountsListModel {
    return new AccountAccountsListModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
    } as Partial<this>;
  }
}

export default AccountAccountsListModel;
