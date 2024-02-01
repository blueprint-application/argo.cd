import { V1LoadBalancerIngressModelOptions as V1LoadBalancerIngress } from '../V1LoadBalancerIngress';
import { V1alpha1ResourceRefModelOptions as V1alpha1ResourceRef } from '../V1alpha1ResourceRef';
import { BaseModel } from '../types';
import type { V1alpha1ResourceNetworkingInfoModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ResourceNetworkingInfoModel extends BaseModel {
  // ExternalURLs holds list of URLs which should be available externally. List is populated for ingress resources using rules hostnames.
  externalURLs?: Array<string>;
  ingress?: Array<V1LoadBalancerIngress>;
  labels?: { [key: string]: string };
  targetLabels?: { [key: string]: string };
  targetRefs?: Array<V1alpha1ResourceRef>;

  constructor(data: V1alpha1ResourceNetworkingInfoModelOptions) {
    super();
    validate(data);
    this.externalURLs = data.externalURLs;
    this.ingress = data.ingress;
    this.labels = data.labels;
    this.targetLabels = data.targetLabels;
    this.targetRefs = data.targetRefs;
  }

  static create(data: V1alpha1ResourceNetworkingInfoModelOptions): V1alpha1ResourceNetworkingInfoModel {
    return new V1alpha1ResourceNetworkingInfoModel(data);
  }

  toObject(): Partial<this> {
    return {
      externalURLs: this.externalURLs,
      ingress: this.ingress,
      labels: this.labels,
      targetLabels: this.targetLabels,
      targetRefs: this.targetRefs,
    } as Partial<this>;
  }
}

export default V1alpha1ResourceNetworkingInfoModel;
