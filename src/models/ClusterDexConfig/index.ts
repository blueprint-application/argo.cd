import { ClusterConnectorModelOptions as ClusterConnector } from '../ClusterConnector';
import { BaseModel } from '../types';
import type { ClusterDexConfigModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ClusterDexConfigModel extends BaseModel {
  connectors?: Array<ClusterConnector>;

  constructor(data: ClusterDexConfigModelOptions) {
    super();
    validate(data);
    this.connectors = data.connectors;
  }

  static create(data: ClusterDexConfigModelOptions): ClusterDexConfigModel {
    return new ClusterDexConfigModel(data);
  }

  toObject(): Partial<this> {
    return {
      connectors: this.connectors,
    } as Partial<this>;
  }
}

export default ClusterDexConfigModel;
