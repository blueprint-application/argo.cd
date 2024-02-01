import { IntstrIntOrStringModelOptions as IntstrIntOrString } from '../IntstrIntOrString';
import { V1alpha1ApplicationMatchExpressionModelOptions as V1alpha1ApplicationMatchExpression } from '../V1alpha1ApplicationMatchExpression';
import { BaseModel } from '../types';
import type { V1alpha1ApplicationSetRolloutStepModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationSetRolloutStepModel extends BaseModel {
  matchExpressions?: Array<V1alpha1ApplicationMatchExpression>;
  maxUpdate?: IntstrIntOrString;

  constructor(data: V1alpha1ApplicationSetRolloutStepModelOptions) {
    super();
    validate(data);
    this.matchExpressions = data.matchExpressions;
    this.maxUpdate = data.maxUpdate;
  }

  static create(data: V1alpha1ApplicationSetRolloutStepModelOptions): V1alpha1ApplicationSetRolloutStepModel {
    return new V1alpha1ApplicationSetRolloutStepModel(data);
  }

  toObject(): Partial<this> {
    return {
      matchExpressions: this.matchExpressions,
      maxUpdate: this.maxUpdate,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationSetRolloutStepModel;
