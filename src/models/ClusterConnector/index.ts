import { BaseModel } from '../types';
import type { ClusterConnectorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ClusterConnectorModel extends BaseModel {
  name?: string;
  type?: string;

  constructor(data: ClusterConnectorModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.type = data.type;
  }

  static create(data: ClusterConnectorModelOptions): ClusterConnectorModel {
    return new ClusterConnectorModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      type: this.type,
    } as Partial<this>;
  }
}

export default ClusterConnectorModel;
