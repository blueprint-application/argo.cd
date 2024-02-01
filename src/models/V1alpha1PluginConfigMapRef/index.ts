import { BaseModel } from '../types';
import type { V1alpha1PluginConfigMapRefModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1PluginConfigMapRefModel extends BaseModel {
  name?: string;

  constructor(data: V1alpha1PluginConfigMapRefModelOptions) {
    super();
    validate(data);
    this.name = data.name;
  }

  static create(data: V1alpha1PluginConfigMapRefModelOptions): V1alpha1PluginConfigMapRefModel {
    return new V1alpha1PluginConfigMapRefModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
    } as Partial<this>;
  }
}

export default V1alpha1PluginConfigMapRefModel;
