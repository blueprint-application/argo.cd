import { V1alpha1ApplicationSetNestedGeneratorModelOptions as V1alpha1ApplicationSetNestedGenerator } from '../V1alpha1ApplicationSetNestedGenerator';
import { V1alpha1ApplicationSetTemplateModelOptions as V1alpha1ApplicationSetTemplate } from '../V1alpha1ApplicationSetTemplate';

export interface V1alpha1MatrixGeneratorModelOptions {
  generators?: Array<V1alpha1ApplicationSetNestedGenerator>;
  template?: V1alpha1ApplicationSetTemplate;
}
