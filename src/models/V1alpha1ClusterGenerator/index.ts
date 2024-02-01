import { V1LabelSelectorModelOptions as V1LabelSelector } from '../V1LabelSelector';
import { V1alpha1ApplicationSetTemplateModelOptions as V1alpha1ApplicationSetTemplate } from '../V1alpha1ApplicationSetTemplate';
import { BaseModel } from '../types';
import type { V1alpha1ClusterGeneratorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ClusterGeneratorModel extends BaseModel {
  selector?: V1LabelSelector;
  template?: V1alpha1ApplicationSetTemplate;
  values?: { [key: string]: string };

  constructor(data: V1alpha1ClusterGeneratorModelOptions) {
    super();
    validate(data);
    this.selector = data.selector;
    this.template = data.template;
    this.values = data.values;
  }

  static create(data: V1alpha1ClusterGeneratorModelOptions): V1alpha1ClusterGeneratorModel {
    return new V1alpha1ClusterGeneratorModel(data);
  }

  toObject(): Partial<this> {
    return {
      selector: this.selector,
      template: this.template,
      values: this.values,
    } as Partial<this>;
  }
}

export default V1alpha1ClusterGeneratorModel;
