import { V1ObjectMetaModelOptions as V1ObjectMeta } from '../V1ObjectMeta';
import { V1alpha1ApplicationSpecModelOptions as V1alpha1ApplicationSpec } from '../V1alpha1ApplicationSpec';
import { V1alpha1ApplicationStatusModelOptions as V1alpha1ApplicationStatus } from '../V1alpha1ApplicationStatus';
import { V1alpha1OperationModelOptions as V1alpha1Operation } from '../V1alpha1Operation';

export interface V1alpha1ApplicationModelOptions {
  metadata?: V1ObjectMeta;
  operation?: V1alpha1Operation;
  spec?: V1alpha1ApplicationSpec;
  status?: V1alpha1ApplicationStatus;
}
