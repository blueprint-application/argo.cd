import { V1alpha1ApplicationSetTemplateModelOptions as V1alpha1ApplicationSetTemplate } from '../V1alpha1ApplicationSetTemplate';
import { V1alpha1GitDirectoryGeneratorItemModelOptions as V1alpha1GitDirectoryGeneratorItem } from '../V1alpha1GitDirectoryGeneratorItem';
import { V1alpha1GitFileGeneratorItemModelOptions as V1alpha1GitFileGeneratorItem } from '../V1alpha1GitFileGeneratorItem';

export interface V1alpha1GitGeneratorModelOptions {
  directories?: Array<V1alpha1GitDirectoryGeneratorItem>;
  files?: Array<V1alpha1GitFileGeneratorItem>;
  pathParamPrefix?: string;
  repoURL?: string;
  requeueAfterSeconds?: string;
  revision?: string;
  template?: V1alpha1ApplicationSetTemplate;
  values?: { [key: string]: string };
}
