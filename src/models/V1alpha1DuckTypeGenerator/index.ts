import { V1LabelSelectorModelOptions as V1LabelSelector } from '../V1LabelSelector';
import { V1alpha1ApplicationSetTemplateModelOptions as V1alpha1ApplicationSetTemplate } from '../V1alpha1ApplicationSetTemplate';
import { BaseModel } from '../types';
import type { V1alpha1DuckTypeGeneratorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1DuckTypeGeneratorModel extends BaseModel {
  configMapRef?: string;
  labelSelector?: V1LabelSelector;
  name?: string;
  requeueAfterSeconds?: string;
  template?: V1alpha1ApplicationSetTemplate;
  values?: { [key: string]: string };

  constructor(data: V1alpha1DuckTypeGeneratorModelOptions) {
    super();
    validate(data);
    this.configMapRef = data.configMapRef;
    this.labelSelector = data.labelSelector;
    this.name = data.name;
    this.requeueAfterSeconds = data.requeueAfterSeconds;
    this.template = data.template;
    this.values = data.values;
  }

  static create(data: V1alpha1DuckTypeGeneratorModelOptions): V1alpha1DuckTypeGeneratorModel {
    return new V1alpha1DuckTypeGeneratorModel(data);
  }

  toObject(): Partial<this> {
    return {
      configMapRef: this.configMapRef,
      labelSelector: this.labelSelector,
      name: this.name,
      requeueAfterSeconds: this.requeueAfterSeconds,
      template: this.template,
      values: this.values,
    } as Partial<this>;
  }
}

export default V1alpha1DuckTypeGeneratorModel;
