import { BaseModel } from '../types';
import type { ClusterClusterIDModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ClusterClusterIDModel extends BaseModel {
  type?: string;
  value?: string;

  constructor(data: ClusterClusterIDModelOptions) {
    super();
    validate(data);
    this.type = data.type;
    this.value = data.value;
  }

  static create(data: ClusterClusterIDModelOptions): ClusterClusterIDModel {
    return new ClusterClusterIDModel(data);
  }

  toObject(): Partial<this> {
    return {
      type: this.type,
      value: this.value,
    } as Partial<this>;
  }
}

export default ClusterClusterIDModel;
