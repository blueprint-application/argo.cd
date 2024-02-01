import { Applicationv1alpha1EnvEntryModelOptions as Applicationv1alpha1EnvEntry } from '../Applicationv1alpha1EnvEntry';
import { V1alpha1ApplicationSourcePluginParameterModelOptions as V1alpha1ApplicationSourcePluginParameter } from '../V1alpha1ApplicationSourcePluginParameter';
import { BaseModel } from '../types';
import type { V1alpha1ApplicationSourcePluginModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationSourcePluginModel extends BaseModel {
  env?: Array<Applicationv1alpha1EnvEntry>;
  name?: string;
  parameters?: Array<V1alpha1ApplicationSourcePluginParameter>;

  constructor(data: V1alpha1ApplicationSourcePluginModelOptions) {
    super();
    validate(data);
    this.env = data.env;
    this.name = data.name;
    this.parameters = data.parameters;
  }

  static create(data: V1alpha1ApplicationSourcePluginModelOptions): V1alpha1ApplicationSourcePluginModel {
    return new V1alpha1ApplicationSourcePluginModel(data);
  }

  toObject(): Partial<this> {
    return {
      env: this.env,
      name: this.name,
      parameters: this.parameters,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationSourcePluginModel;
