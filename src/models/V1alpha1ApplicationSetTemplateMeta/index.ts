import { BaseModel } from '../types';
import type { V1alpha1ApplicationSetTemplateMetaModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationSetTemplateMetaModel extends BaseModel {
  annotations?: { [key: string]: string };
  finalizers?: Array<string>;
  labels?: { [key: string]: string };
  name?: string;
  namespace?: string;

  constructor(data: V1alpha1ApplicationSetTemplateMetaModelOptions) {
    super();
    validate(data);
    this.annotations = data.annotations;
    this.finalizers = data.finalizers;
    this.labels = data.labels;
    this.name = data.name;
    this.namespace = data.namespace;
  }

  static create(data: V1alpha1ApplicationSetTemplateMetaModelOptions): V1alpha1ApplicationSetTemplateMetaModel {
    return new V1alpha1ApplicationSetTemplateMetaModel(data);
  }

  toObject(): Partial<this> {
    return {
      annotations: this.annotations,
      finalizers: this.finalizers,
      labels: this.labels,
      name: this.name,
      namespace: this.namespace,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationSetTemplateMetaModel;
