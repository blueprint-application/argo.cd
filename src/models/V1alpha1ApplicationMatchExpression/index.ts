import { BaseModel } from '../types';
import type { V1alpha1ApplicationMatchExpressionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationMatchExpressionModel extends BaseModel {
  key?: string;
  operator?: string;
  values?: Array<string>;

  constructor(data: V1alpha1ApplicationMatchExpressionModelOptions) {
    super();
    validate(data);
    this.key = data.key;
    this.operator = data.operator;
    this.values = data.values;
  }

  static create(data: V1alpha1ApplicationMatchExpressionModelOptions): V1alpha1ApplicationMatchExpressionModel {
    return new V1alpha1ApplicationMatchExpressionModel(data);
  }

  toObject(): Partial<this> {
    return {
      key: this.key,
      operator: this.operator,
      values: this.values,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationMatchExpressionModel;
