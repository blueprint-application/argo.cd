import { V1alpha1HostInfoModelOptions as V1alpha1HostInfo } from '../V1alpha1HostInfo';
import { V1alpha1ResourceNodeModelOptions as V1alpha1ResourceNode } from '../V1alpha1ResourceNode';

export interface V1alpha1ApplicationTreeModelOptions {
  hosts?: Array<V1alpha1HostInfo>;
  nodes?: Array<V1alpha1ResourceNode>;
  orphanedNodes?: Array<V1alpha1ResourceNode>;
}
