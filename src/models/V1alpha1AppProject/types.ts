import { V1ObjectMetaModelOptions as V1ObjectMeta } from '../V1ObjectMeta';
import { V1alpha1AppProjectSpecModelOptions as V1alpha1AppProjectSpec } from '../V1alpha1AppProjectSpec';
import { V1alpha1AppProjectStatusModelOptions as V1alpha1AppProjectStatus } from '../V1alpha1AppProjectStatus';

export interface V1alpha1AppProjectModelOptions {
  metadata?: V1ObjectMeta;
  spec?: V1alpha1AppProjectSpec;
  status?: V1alpha1AppProjectStatus;
}
