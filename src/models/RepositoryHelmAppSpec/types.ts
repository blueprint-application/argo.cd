import { V1alpha1HelmFileParameterModelOptions as V1alpha1HelmFileParameter } from '../V1alpha1HelmFileParameter';
import { V1alpha1HelmParameterModelOptions as V1alpha1HelmParameter } from '../V1alpha1HelmParameter';

export interface RepositoryHelmAppSpecModelOptions {
  fileParameters?: Array<V1alpha1HelmFileParameter>;
  name?: string;
  parameters?: Array<V1alpha1HelmParameter>;
  valueFiles?: Array<string>;
  values?: string;
}
