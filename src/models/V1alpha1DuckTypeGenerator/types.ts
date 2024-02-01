import { V1LabelSelectorModelOptions as V1LabelSelector } from '../V1LabelSelector';
import { V1alpha1ApplicationSetTemplateModelOptions as V1alpha1ApplicationSetTemplate } from '../V1alpha1ApplicationSetTemplate';

export interface V1alpha1DuckTypeGeneratorModelOptions {
  configMapRef?: string;
  labelSelector?: V1LabelSelector;
  name?: string;
  requeueAfterSeconds?: string;
  template?: V1alpha1ApplicationSetTemplate;
  values?: { [key: string]: string };
}
