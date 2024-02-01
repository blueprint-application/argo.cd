import { V1LoadBalancerIngressModelOptions as V1LoadBalancerIngress } from '../V1LoadBalancerIngress';
import { V1alpha1ResourceRefModelOptions as V1alpha1ResourceRef } from '../V1alpha1ResourceRef';

export interface V1alpha1ResourceNetworkingInfoModelOptions {
  externalURLs?: Array<string>;
  ingress?: Array<V1LoadBalancerIngress>;
  labels?: { [key: string]: string };
  targetLabels?: { [key: string]: string };
  targetRefs?: Array<V1alpha1ResourceRef>;
}
