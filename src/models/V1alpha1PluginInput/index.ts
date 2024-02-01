import { V1JSONModelOptions as V1JSON } from '../V1JSON';
import { BaseModel } from '../types';
import type { V1alpha1PluginInputModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1PluginInputModel extends BaseModel {
  // Parameters contains the information to pass to the plugin. It is a map. The keys must be strings, and the values can be any type.
  parameters?: { [key: string]: V1JSON };

  constructor(data: V1alpha1PluginInputModelOptions) {
    super();
    validate(data);
    this.parameters = data.parameters;
  }

  static create(data: V1alpha1PluginInputModelOptions): V1alpha1PluginInputModel {
    return new V1alpha1PluginInputModel(data);
  }

  toObject(): Partial<this> {
    return {
      parameters: this.parameters,
    } as Partial<this>;
  }
}

export default V1alpha1PluginInputModel;
