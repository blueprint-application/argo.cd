import { V1NodeSystemInfoModelOptions as V1NodeSystemInfo } from '../V1NodeSystemInfo';
import { V1alpha1HostResourceInfoModelOptions as V1alpha1HostResourceInfo } from '../V1alpha1HostResourceInfo';
import { BaseModel } from '../types';
import type { V1alpha1HostInfoModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1HostInfoModel extends BaseModel {
  name?: string;
  resourcesInfo?: Array<V1alpha1HostResourceInfo>;
  systemInfo?: V1NodeSystemInfo;

  constructor(data: V1alpha1HostInfoModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.resourcesInfo = data.resourcesInfo;
    this.systemInfo = data.systemInfo;
  }

  static create(data: V1alpha1HostInfoModelOptions): V1alpha1HostInfoModel {
    return new V1alpha1HostInfoModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      resourcesInfo: this.resourcesInfo,
      systemInfo: this.systemInfo,
    } as Partial<this>;
  }
}

export default V1alpha1HostInfoModel;
