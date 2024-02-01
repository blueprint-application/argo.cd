import { BaseModel } from '../types';
import type { V1alpha1HostResourceInfoModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1HostResourceInfoModel extends BaseModel {
  capacity?: string;
  requestedByApp?: string;
  requestedByNeighbors?: string;
  resourceName?: string;

  constructor(data: V1alpha1HostResourceInfoModelOptions) {
    super();
    validate(data);
    this.capacity = data.capacity;
    this.requestedByApp = data.requestedByApp;
    this.requestedByNeighbors = data.requestedByNeighbors;
    this.resourceName = data.resourceName;
  }

  static create(data: V1alpha1HostResourceInfoModelOptions): V1alpha1HostResourceInfoModel {
    return new V1alpha1HostResourceInfoModel(data);
  }

  toObject(): Partial<this> {
    return {
      capacity: this.capacity,
      requestedByApp: this.requestedByApp,
      requestedByNeighbors: this.requestedByNeighbors,
      resourceName: this.resourceName,
    } as Partial<this>;
  }
}

export default V1alpha1HostResourceInfoModel;
