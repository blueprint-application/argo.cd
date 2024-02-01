import { BaseModel } from '../types';
import type { ClusterPluginModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ClusterPluginModel extends BaseModel {
  name?: string;

  constructor(data: ClusterPluginModelOptions) {
    super();
    validate(data);
    this.name = data.name;
  }

  static create(data: ClusterPluginModelOptions): ClusterPluginModel {
    return new ClusterPluginModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
    } as Partial<this>;
  }
}

export default ClusterPluginModel;
