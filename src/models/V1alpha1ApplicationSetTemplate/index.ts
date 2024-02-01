import { V1alpha1ApplicationSetTemplateMetaModelOptions as V1alpha1ApplicationSetTemplateMeta } from '../V1alpha1ApplicationSetTemplateMeta';
import { V1alpha1ApplicationSpecModelOptions as V1alpha1ApplicationSpec } from '../V1alpha1ApplicationSpec';
import { BaseModel } from '../types';
import type { V1alpha1ApplicationSetTemplateModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationSetTemplateModel extends BaseModel {
  metadata?: V1alpha1ApplicationSetTemplateMeta;
  spec?: V1alpha1ApplicationSpec;

  constructor(data: V1alpha1ApplicationSetTemplateModelOptions) {
    super();
    validate(data);
    this.metadata = data.metadata;
    this.spec = data.spec;
  }

  static create(data: V1alpha1ApplicationSetTemplateModelOptions): V1alpha1ApplicationSetTemplateModel {
    return new V1alpha1ApplicationSetTemplateModel(data);
  }

  toObject(): Partial<this> {
    return {
      metadata: this.metadata,
      spec: this.spec,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationSetTemplateModel;
