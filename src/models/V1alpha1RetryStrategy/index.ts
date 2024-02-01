import { V1alpha1BackoffModelOptions as V1alpha1Backoff } from '../V1alpha1Backoff';
import { BaseModel } from '../types';
import type { V1alpha1RetryStrategyModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1RetryStrategyModel extends BaseModel {
  backoff?: V1alpha1Backoff;
  // Limit is the maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed.
  limit?: string;

  constructor(data: V1alpha1RetryStrategyModelOptions) {
    super();
    validate(data);
    this.backoff = data.backoff;
    this.limit = data.limit;
  }

  static create(data: V1alpha1RetryStrategyModelOptions): V1alpha1RetryStrategyModel {
    return new V1alpha1RetryStrategyModel(data);
  }

  toObject(): Partial<this> {
    return {
      backoff: this.backoff,
      limit: this.limit,
    } as Partial<this>;
  }
}

export default V1alpha1RetryStrategyModel;
