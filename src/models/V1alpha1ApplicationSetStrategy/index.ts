import { V1alpha1ApplicationSetRolloutStrategyModelOptions as V1alpha1ApplicationSetRolloutStrategy } from '../V1alpha1ApplicationSetRolloutStrategy';
import { BaseModel } from '../types';
import type { V1alpha1ApplicationSetStrategyModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationSetStrategyModel extends BaseModel {
  rollingSync?: V1alpha1ApplicationSetRolloutStrategy;
  type?: string;

  constructor(data: V1alpha1ApplicationSetStrategyModelOptions) {
    super();
    validate(data);
    this.rollingSync = data.rollingSync;
    this.type = data.type;
  }

  static create(data: V1alpha1ApplicationSetStrategyModelOptions): V1alpha1ApplicationSetStrategyModel {
    return new V1alpha1ApplicationSetStrategyModel(data);
  }

  toObject(): Partial<this> {
    return {
      rollingSync: this.rollingSync,
      type: this.type,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationSetStrategyModel;
