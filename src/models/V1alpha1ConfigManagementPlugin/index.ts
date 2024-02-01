import { V1alpha1CommandModelOptions as V1alpha1Command } from '../V1alpha1Command';
import { BaseModel } from '../types';
import type { V1alpha1ConfigManagementPluginModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ConfigManagementPluginModel extends BaseModel {
  generate?: V1alpha1Command;
  init?: V1alpha1Command;
  lockRepo?: boolean;
  name?: string;

  constructor(data: V1alpha1ConfigManagementPluginModelOptions) {
    super();
    validate(data);
    this.generate = data.generate;
    this.init = data.init;
    this.lockRepo = data.lockRepo;
    this.name = data.name;
  }

  static create(data: V1alpha1ConfigManagementPluginModelOptions): V1alpha1ConfigManagementPluginModel {
    return new V1alpha1ConfigManagementPluginModel(data);
  }

  toObject(): Partial<this> {
    return {
      generate: this.generate,
      init: this.init,
      lockRepo: this.lockRepo,
      name: this.name,
    } as Partial<this>;
  }
}

export default V1alpha1ConfigManagementPluginModel;
