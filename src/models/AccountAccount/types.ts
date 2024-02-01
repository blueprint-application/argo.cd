import { AccountTokenModelOptions as AccountToken } from '../AccountToken';

export interface AccountAccountModelOptions {
  capabilities?: Array<string>;
  enabled?: boolean;
  name?: string;
  tokens?: Array<AccountToken>;
}
