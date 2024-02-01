import { V1LabelSelectorModelOptions as V1LabelSelector } from '../V1LabelSelector';
import { V1alpha1ApplicationSetTemplateModelOptions as V1alpha1ApplicationSetTemplate } from '../V1alpha1ApplicationSetTemplate';

export interface V1alpha1ClusterGeneratorModelOptions {
  selector?: V1LabelSelector;
  template?: V1alpha1ApplicationSetTemplate;
  values?: { [key: string]: string };
}
