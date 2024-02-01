import { V1alpha1ApplicationSetRolloutStepModelOptions as V1alpha1ApplicationSetRolloutStep } from '../V1alpha1ApplicationSetRolloutStep';
import { BaseModel } from '../types';
import type { V1alpha1ApplicationSetRolloutStrategyModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationSetRolloutStrategyModel extends BaseModel {
  steps?: Array<V1alpha1ApplicationSetRolloutStep>;

  constructor(data: V1alpha1ApplicationSetRolloutStrategyModelOptions) {
    super();
    validate(data);
    this.steps = data.steps;
  }

  static create(data: V1alpha1ApplicationSetRolloutStrategyModelOptions): V1alpha1ApplicationSetRolloutStrategyModel {
    return new V1alpha1ApplicationSetRolloutStrategyModel(data);
  }

  toObject(): Partial<this> {
    return {
      steps: this.steps,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationSetRolloutStrategyModel;
