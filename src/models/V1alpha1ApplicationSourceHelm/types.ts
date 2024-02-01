import { RuntimeRawExtensionModelOptions as RuntimeRawExtension } from '../RuntimeRawExtension';
import { V1alpha1HelmFileParameterModelOptions as V1alpha1HelmFileParameter } from '../V1alpha1HelmFileParameter';
import { V1alpha1HelmParameterModelOptions as V1alpha1HelmParameter } from '../V1alpha1HelmParameter';

export interface V1alpha1ApplicationSourceHelmModelOptions {
  fileParameters?: Array<V1alpha1HelmFileParameter>;
  ignoreMissingValueFiles?: boolean;
  parameters?: Array<V1alpha1HelmParameter>;
  passCredentials?: boolean;
  releaseName?: string;
  skipCrds?: boolean;
  valueFiles?: Array<string>;
  values?: string;
  valuesObject?: RuntimeRawExtension;
  version?: string;
}
