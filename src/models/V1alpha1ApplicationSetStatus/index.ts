import { V1alpha1ApplicationSetApplicationStatusModelOptions as V1alpha1ApplicationSetApplicationStatus } from '../V1alpha1ApplicationSetApplicationStatus';
import { V1alpha1ApplicationSetConditionModelOptions as V1alpha1ApplicationSetCondition } from '../V1alpha1ApplicationSetCondition';
import { BaseModel } from '../types';
import type { V1alpha1ApplicationSetStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationSetStatusModel extends BaseModel {
  applicationStatus?: Array<V1alpha1ApplicationSetApplicationStatus>;
  conditions?: Array<V1alpha1ApplicationSetCondition>;

  constructor(data: V1alpha1ApplicationSetStatusModelOptions) {
    super();
    validate(data);
    this.applicationStatus = data.applicationStatus;
    this.conditions = data.conditions;
  }

  static create(data: V1alpha1ApplicationSetStatusModelOptions): V1alpha1ApplicationSetStatusModel {
    return new V1alpha1ApplicationSetStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      applicationStatus: this.applicationStatus,
      conditions: this.conditions,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationSetStatusModel;
