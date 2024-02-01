import { V1alpha1ApplicationPreservedFieldsModelOptions as V1alpha1ApplicationPreservedFields } from '../V1alpha1ApplicationPreservedFields';
import { V1alpha1ApplicationSetGeneratorModelOptions as V1alpha1ApplicationSetGenerator } from '../V1alpha1ApplicationSetGenerator';
import { V1alpha1ApplicationSetStrategyModelOptions as V1alpha1ApplicationSetStrategy } from '../V1alpha1ApplicationSetStrategy';
import { V1alpha1ApplicationSetSyncPolicyModelOptions as V1alpha1ApplicationSetSyncPolicy } from '../V1alpha1ApplicationSetSyncPolicy';
import { V1alpha1ApplicationSetTemplateModelOptions as V1alpha1ApplicationSetTemplate } from '../V1alpha1ApplicationSetTemplate';

export interface V1alpha1ApplicationSetSpecModelOptions {
  applyNestedSelectors?: boolean;
  generators?: Array<V1alpha1ApplicationSetGenerator>;
  goTemplate?: boolean;
  goTemplateOptions?: Array<string>;
  preservedFields?: V1alpha1ApplicationPreservedFields;
  strategy?: V1alpha1ApplicationSetStrategy;
  syncPolicy?: V1alpha1ApplicationSetSyncPolicy;
  template?: V1alpha1ApplicationSetTemplate;
}
