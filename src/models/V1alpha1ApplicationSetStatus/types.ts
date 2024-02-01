import { V1alpha1ApplicationSetApplicationStatusModelOptions as V1alpha1ApplicationSetApplicationStatus } from '../V1alpha1ApplicationSetApplicationStatus';
import { V1alpha1ApplicationSetConditionModelOptions as V1alpha1ApplicationSetCondition } from '../V1alpha1ApplicationSetCondition';

export interface V1alpha1ApplicationSetStatusModelOptions {
  applicationStatus?: Array<V1alpha1ApplicationSetApplicationStatus>;
  conditions?: Array<V1alpha1ApplicationSetCondition>;
}
