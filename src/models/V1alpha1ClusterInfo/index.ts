import { V1alpha1ClusterCacheInfoModelOptions as V1alpha1ClusterCacheInfo } from '../V1alpha1ClusterCacheInfo';
import { V1alpha1ConnectionStateModelOptions as V1alpha1ConnectionState } from '../V1alpha1ConnectionState';
import { BaseModel } from '../types';
import type { V1alpha1ClusterInfoModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ClusterInfoModel extends BaseModel {
  apiVersions?: Array<string>;
  applicationsCount?: string;
  cacheInfo?: V1alpha1ClusterCacheInfo;
  connectionState?: V1alpha1ConnectionState;
  serverVersion?: string;

  constructor(data: V1alpha1ClusterInfoModelOptions) {
    super();
    validate(data);
    this.apiVersions = data.apiVersions;
    this.applicationsCount = data.applicationsCount;
    this.cacheInfo = data.cacheInfo;
    this.connectionState = data.connectionState;
    this.serverVersion = data.serverVersion;
  }

  static create(data: V1alpha1ClusterInfoModelOptions): V1alpha1ClusterInfoModel {
    return new V1alpha1ClusterInfoModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersions: this.apiVersions,
      applicationsCount: this.applicationsCount,
      cacheInfo: this.cacheInfo,
      connectionState: this.connectionState,
      serverVersion: this.serverVersion,
    } as Partial<this>;
  }
}

export default V1alpha1ClusterInfoModel;
