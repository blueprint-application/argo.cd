import { V1ObjectMetaModelOptions as V1ObjectMeta } from '../V1ObjectMeta';
import { V1alpha1ApplicationSetSpecModelOptions as V1alpha1ApplicationSetSpec } from '../V1alpha1ApplicationSetSpec';
import { V1alpha1ApplicationSetStatusModelOptions as V1alpha1ApplicationSetStatus } from '../V1alpha1ApplicationSetStatus';

export interface V1alpha1ApplicationSetModelOptions {
  metadata?: V1ObjectMeta;
  spec?: V1alpha1ApplicationSetSpec;
  status?: V1alpha1ApplicationSetStatus;
}
