import { V1JSONModelOptions as V1JSON } from '../V1JSON';
import { V1alpha1ApplicationSetTemplateModelOptions as V1alpha1ApplicationSetTemplate } from '../V1alpha1ApplicationSetTemplate';

export interface V1alpha1ListGeneratorModelOptions {
  elements?: Array<V1JSON>;
  elementsYaml?: string;
  template?: V1alpha1ApplicationSetTemplate;
}
