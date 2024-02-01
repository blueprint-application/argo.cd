import { BaseModel } from '../types';
import type { V1alpha1ClusterCacheInfoModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ClusterCacheInfoModel extends BaseModel {
  apisCount?: string;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal=false +protobuf.as=Timestamp +protobuf.options.(gogoproto.goproto_stringer)=false
  lastCacheSyncTime?: Date;
  resourcesCount?: string;

  constructor(data: V1alpha1ClusterCacheInfoModelOptions) {
    super();
    validate(data);
    this.apisCount = data.apisCount;
    this.lastCacheSyncTime = data.lastCacheSyncTime;
    this.resourcesCount = data.resourcesCount;
  }

  static create(data: V1alpha1ClusterCacheInfoModelOptions): V1alpha1ClusterCacheInfoModel {
    return new V1alpha1ClusterCacheInfoModel(data);
  }

  toObject(): Partial<this> {
    return {
      apisCount: this.apisCount,
      lastCacheSyncTime: this.lastCacheSyncTime,
      resourcesCount: this.resourcesCount,
    } as Partial<this>;
  }
}

export default V1alpha1ClusterCacheInfoModel;
