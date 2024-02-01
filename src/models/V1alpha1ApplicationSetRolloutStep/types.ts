import { IntstrIntOrStringModelOptions as IntstrIntOrString } from '../IntstrIntOrString';
import { V1alpha1ApplicationMatchExpressionModelOptions as V1alpha1ApplicationMatchExpression } from '../V1alpha1ApplicationMatchExpression';

export interface V1alpha1ApplicationSetRolloutStepModelOptions {
  matchExpressions?: Array<V1alpha1ApplicationMatchExpression>;
  maxUpdate?: IntstrIntOrString;
}
