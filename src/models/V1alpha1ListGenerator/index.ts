import { V1JSONModelOptions as V1JSON } from '../V1JSON';
import { V1alpha1ApplicationSetTemplateModelOptions as V1alpha1ApplicationSetTemplate } from '../V1alpha1ApplicationSetTemplate';
import { BaseModel } from '../types';
import type { V1alpha1ListGeneratorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ListGeneratorModel extends BaseModel {
  elements?: Array<V1JSON>;
  elementsYaml?: string;
  template?: V1alpha1ApplicationSetTemplate;

  constructor(data: V1alpha1ListGeneratorModelOptions) {
    super();
    validate(data);
    this.elements = data.elements;
    this.elementsYaml = data.elementsYaml;
    this.template = data.template;
  }

  static create(data: V1alpha1ListGeneratorModelOptions): V1alpha1ListGeneratorModel {
    return new V1alpha1ListGeneratorModel(data);
  }

  toObject(): Partial<this> {
    return {
      elements: this.elements,
      elementsYaml: this.elementsYaml,
      template: this.template,
    } as Partial<this>;
  }
}

export default V1alpha1ListGeneratorModel;
