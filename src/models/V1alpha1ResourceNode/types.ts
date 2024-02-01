import { V1alpha1HealthStatusModelOptions as V1alpha1HealthStatus } from '../V1alpha1HealthStatus';
import { V1alpha1InfoItemModelOptions as V1alpha1InfoItem } from '../V1alpha1InfoItem';
import { V1alpha1ResourceNetworkingInfoModelOptions as V1alpha1ResourceNetworkingInfo } from '../V1alpha1ResourceNetworkingInfo';
import { V1alpha1ResourceRefModelOptions as V1alpha1ResourceRef } from '../V1alpha1ResourceRef';

export interface V1alpha1ResourceNodeModelOptions {
  createdAt?: Date;
  health?: V1alpha1HealthStatus;
  images?: Array<string>;
  info?: Array<V1alpha1InfoItem>;
  networkingInfo?: V1alpha1ResourceNetworkingInfo;
  parentRefs?: Array<V1alpha1ResourceRef>;
  resourceVersion?: string;
  group?: string;
  kind?: string;
  name?: string;
  namespace?: string;
  uid?: string;
  version?: string;
}
