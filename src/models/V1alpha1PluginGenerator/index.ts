import { V1alpha1ApplicationSetTemplateModelOptions as V1alpha1ApplicationSetTemplate } from '../V1alpha1ApplicationSetTemplate';
import { V1alpha1PluginConfigMapRefModelOptions as V1alpha1PluginConfigMapRef } from '../V1alpha1PluginConfigMapRef';
import { V1alpha1PluginInputModelOptions as V1alpha1PluginInput } from '../V1alpha1PluginInput';
import { BaseModel } from '../types';
import type { V1alpha1PluginGeneratorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1PluginGeneratorModel extends BaseModel {
  configMapRef?: V1alpha1PluginConfigMapRef;
  input?: V1alpha1PluginInput;
  // RequeueAfterSeconds determines how long the ApplicationSet controller will wait before reconciling the ApplicationSet again.
  requeueAfterSeconds?: string;
  template?: V1alpha1ApplicationSetTemplate;
  // Values contains key/value pairs which are passed directly as parameters to the template. These values will not be sent as parameters to the plugin.
  values?: { [key: string]: string };

  constructor(data: V1alpha1PluginGeneratorModelOptions) {
    super();
    validate(data);
    this.configMapRef = data.configMapRef;
    this.input = data.input;
    this.requeueAfterSeconds = data.requeueAfterSeconds;
    this.template = data.template;
    this.values = data.values;
  }

  static create(data: V1alpha1PluginGeneratorModelOptions): V1alpha1PluginGeneratorModel {
    return new V1alpha1PluginGeneratorModel(data);
  }

  toObject(): Partial<this> {
    return {
      configMapRef: this.configMapRef,
      input: this.input,
      requeueAfterSeconds: this.requeueAfterSeconds,
      template: this.template,
      values: this.values,
    } as Partial<this>;
  }
}

export default V1alpha1PluginGeneratorModel;
