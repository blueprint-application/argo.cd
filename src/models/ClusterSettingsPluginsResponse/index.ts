import { ClusterPluginModelOptions as ClusterPlugin } from '../ClusterPlugin';
import { BaseModel } from '../types';
import type { ClusterSettingsPluginsResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ClusterSettingsPluginsResponseModel extends BaseModel {
  plugins?: Array<ClusterPlugin>;

  constructor(data: ClusterSettingsPluginsResponseModelOptions) {
    super();
    validate(data);
    this.plugins = data.plugins;
  }

  static create(data: ClusterSettingsPluginsResponseModelOptions): ClusterSettingsPluginsResponseModel {
    return new ClusterSettingsPluginsResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      plugins: this.plugins,
    } as Partial<this>;
  }
}

export default ClusterSettingsPluginsResponseModel;
