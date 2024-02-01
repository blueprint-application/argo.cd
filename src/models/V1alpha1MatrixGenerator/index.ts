import { V1alpha1ApplicationSetNestedGeneratorModelOptions as V1alpha1ApplicationSetNestedGenerator } from '../V1alpha1ApplicationSetNestedGenerator';
import { V1alpha1ApplicationSetTemplateModelOptions as V1alpha1ApplicationSetTemplate } from '../V1alpha1ApplicationSetTemplate';
import { BaseModel } from '../types';
import type { V1alpha1MatrixGeneratorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1MatrixGeneratorModel extends BaseModel {
  generators?: Array<V1alpha1ApplicationSetNestedGenerator>;
  template?: V1alpha1ApplicationSetTemplate;

  constructor(data: V1alpha1MatrixGeneratorModelOptions) {
    super();
    validate(data);
    this.generators = data.generators;
    this.template = data.template;
  }

  static create(data: V1alpha1MatrixGeneratorModelOptions): V1alpha1MatrixGeneratorModel {
    return new V1alpha1MatrixGeneratorModel(data);
  }

  toObject(): Partial<this> {
    return {
      generators: this.generators,
      template: this.template,
    } as Partial<this>;
  }
}

export default V1alpha1MatrixGeneratorModel;
