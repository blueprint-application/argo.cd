import { V1alpha1OrphanedResourceKeyModelOptions as V1alpha1OrphanedResourceKey } from '../V1alpha1OrphanedResourceKey';
import { BaseModel } from '../types';
import type { V1alpha1OrphanedResourcesMonitorSettingsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1OrphanedResourcesMonitorSettingsModel extends BaseModel {
  ignore?: Array<V1alpha1OrphanedResourceKey>;
  warn?: boolean;

  constructor(data: V1alpha1OrphanedResourcesMonitorSettingsModelOptions) {
    super();
    validate(data);
    this.ignore = data.ignore;
    this.warn = data.warn;
  }

  static create(
    data: V1alpha1OrphanedResourcesMonitorSettingsModelOptions,
  ): V1alpha1OrphanedResourcesMonitorSettingsModel {
    return new V1alpha1OrphanedResourcesMonitorSettingsModel(data);
  }

  toObject(): Partial<this> {
    return {
      ignore: this.ignore,
      warn: this.warn,
    } as Partial<this>;
  }
}

export default V1alpha1OrphanedResourcesMonitorSettingsModel;
