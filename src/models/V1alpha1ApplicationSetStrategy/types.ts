import { V1alpha1ApplicationSetRolloutStrategyModelOptions as V1alpha1ApplicationSetRolloutStrategy } from '../V1alpha1ApplicationSetRolloutStrategy';

export interface V1alpha1ApplicationSetStrategyModelOptions {
  rollingSync?: V1alpha1ApplicationSetRolloutStrategy;
  type?: string;
}
