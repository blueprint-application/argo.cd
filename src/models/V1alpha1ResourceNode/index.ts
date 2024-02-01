import { V1alpha1HealthStatusModelOptions as V1alpha1HealthStatus } from '../V1alpha1HealthStatus';
import { V1alpha1InfoItemModelOptions as V1alpha1InfoItem } from '../V1alpha1InfoItem';
import { V1alpha1ResourceNetworkingInfoModelOptions as V1alpha1ResourceNetworkingInfo } from '../V1alpha1ResourceNetworkingInfo';
import { V1alpha1ResourceRefModelOptions as V1alpha1ResourceRef } from '../V1alpha1ResourceRef';
import { BaseModel } from '../types';
import type { V1alpha1ResourceNodeModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ResourceNodeModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal=false +protobuf.as=Timestamp +protobuf.options.(gogoproto.goproto_stringer)=false
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

  constructor(data: V1alpha1ResourceNodeModelOptions) {
    super();
    validate(data);
    this.createdAt = data.createdAt;
    this.health = data.health;
    this.images = data.images;
    this.info = data.info;
    this.networkingInfo = data.networkingInfo;
    this.parentRefs = data.parentRefs;
    this.resourceVersion = data.resourceVersion;
    this.group = data.group;
    this.kind = data.kind;
    this.name = data.name;
    this.namespace = data.namespace;
    this.uid = data.uid;
    this.version = data.version;
  }

  static create(data: V1alpha1ResourceNodeModelOptions): V1alpha1ResourceNodeModel {
    return new V1alpha1ResourceNodeModel(data);
  }

  toObject(): Partial<this> {
    return {
      createdAt: this.createdAt,
      health: this.health,
      images: this.images,
      info: this.info,
      networkingInfo: this.networkingInfo,
      parentRefs: this.parentRefs,
      resourceVersion: this.resourceVersion,
      group: this.group,
      kind: this.kind,
      name: this.name,
      namespace: this.namespace,
      uid: this.uid,
      version: this.version,
    } as Partial<this>;
  }
}

export default V1alpha1ResourceNodeModel;
