import { V1alpha1ApplicationSetNestedGeneratorModelOptions as V1alpha1ApplicationSetNestedGenerator } from '../V1alpha1ApplicationSetNestedGenerator';
import { V1alpha1ApplicationSetTemplateModelOptions as V1alpha1ApplicationSetTemplate } from '../V1alpha1ApplicationSetTemplate';
import { BaseModel } from '../types';
import type { V1alpha1MergeGeneratorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1MergeGeneratorModel extends BaseModel {
  generators?: Array<V1alpha1ApplicationSetNestedGenerator>;
  mergeKeys?: Array<string>;
  template?: V1alpha1ApplicationSetTemplate;

  constructor(data: V1alpha1MergeGeneratorModelOptions) {
    super();
    validate(data);
    this.generators = data.generators;
    this.mergeKeys = data.mergeKeys;
    this.template = data.template;
  }

  static create(data: V1alpha1MergeGeneratorModelOptions): V1alpha1MergeGeneratorModel {
    return new V1alpha1MergeGeneratorModel(data);
  }

  toObject(): Partial<this> {
    return {
      generators: this.generators,
      mergeKeys: this.mergeKeys,
      template: this.template,
    } as Partial<this>;
  }
}

export default V1alpha1MergeGeneratorModel;
