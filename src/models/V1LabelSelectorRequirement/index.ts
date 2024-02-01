import { BaseModel } from '../types';
import type { V1LabelSelectorRequirementModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1LabelSelectorRequirementModel extends BaseModel {
  key?: string;
  // operator represents a key\'s relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  operator?: string;
  values?: Array<string>;

  constructor(data: V1LabelSelectorRequirementModelOptions) {
    super();
    validate(data);
    this.key = data.key;
    this.operator = data.operator;
    this.values = data.values;
  }

  static create(data: V1LabelSelectorRequirementModelOptions): V1LabelSelectorRequirementModel {
    return new V1LabelSelectorRequirementModel(data);
  }

  toObject(): Partial<this> {
    return {
      key: this.key,
      operator: this.operator,
      values: this.values,
    } as Partial<this>;
  }
}

export default V1LabelSelectorRequirementModel;
