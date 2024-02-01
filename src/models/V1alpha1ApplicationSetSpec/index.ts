import { V1alpha1ApplicationPreservedFieldsModelOptions as V1alpha1ApplicationPreservedFields } from '../V1alpha1ApplicationPreservedFields';
import { V1alpha1ApplicationSetGeneratorModelOptions as V1alpha1ApplicationSetGenerator } from '../V1alpha1ApplicationSetGenerator';
import { V1alpha1ApplicationSetStrategyModelOptions as V1alpha1ApplicationSetStrategy } from '../V1alpha1ApplicationSetStrategy';
import { V1alpha1ApplicationSetSyncPolicyModelOptions as V1alpha1ApplicationSetSyncPolicy } from '../V1alpha1ApplicationSetSyncPolicy';
import { V1alpha1ApplicationSetTemplateModelOptions as V1alpha1ApplicationSetTemplate } from '../V1alpha1ApplicationSetTemplate';
import { BaseModel } from '../types';
import type { V1alpha1ApplicationSetSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationSetSpecModel extends BaseModel {
  applyNestedSelectors?: boolean;
  generators?: Array<V1alpha1ApplicationSetGenerator>;
  goTemplate?: boolean;
  goTemplateOptions?: Array<string>;
  preservedFields?: V1alpha1ApplicationPreservedFields;
  strategy?: V1alpha1ApplicationSetStrategy;
  syncPolicy?: V1alpha1ApplicationSetSyncPolicy;
  template?: V1alpha1ApplicationSetTemplate;

  constructor(data: V1alpha1ApplicationSetSpecModelOptions) {
    super();
    validate(data);
    this.applyNestedSelectors = data.applyNestedSelectors;
    this.generators = data.generators;
    this.goTemplate = data.goTemplate;
    this.goTemplateOptions = data.goTemplateOptions;
    this.preservedFields = data.preservedFields;
    this.strategy = data.strategy;
    this.syncPolicy = data.syncPolicy;
    this.template = data.template;
  }

  static create(data: V1alpha1ApplicationSetSpecModelOptions): V1alpha1ApplicationSetSpecModel {
    return new V1alpha1ApplicationSetSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      applyNestedSelectors: this.applyNestedSelectors,
      generators: this.generators,
      goTemplate: this.goTemplate,
      goTemplateOptions: this.goTemplateOptions,
      preservedFields: this.preservedFields,
      strategy: this.strategy,
      syncPolicy: this.syncPolicy,
      template: this.template,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationSetSpecModel;
