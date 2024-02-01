import { V1alpha1BackoffModelOptions as V1alpha1Backoff } from '../V1alpha1Backoff';

export interface V1alpha1RetryStrategyModelOptions {
  backoff?: V1alpha1Backoff;
  limit?: string;
}
