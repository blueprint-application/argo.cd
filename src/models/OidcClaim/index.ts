import { BaseModel } from '../types';
import type { OidcClaimModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class OidcClaimModel extends BaseModel {
  essential?: boolean;
  value?: string;
  values?: Array<string>;

  constructor(data: OidcClaimModelOptions) {
    super();
    validate(data);
    this.essential = data.essential;
    this.value = data.value;
    this.values = data.values;
  }

  static create(data: OidcClaimModelOptions): OidcClaimModel {
    return new OidcClaimModel(data);
  }

  toObject(): Partial<this> {
    return {
      essential: this.essential,
      value: this.value,
      values: this.values,
    } as Partial<this>;
  }
}

export default OidcClaimModel;
