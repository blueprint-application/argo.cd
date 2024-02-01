import { Applicationv1alpha1EnvEntryModelOptions as Applicationv1alpha1EnvEntry } from '../Applicationv1alpha1EnvEntry';
import { V1alpha1ApplicationSourcePluginParameterModelOptions as V1alpha1ApplicationSourcePluginParameter } from '../V1alpha1ApplicationSourcePluginParameter';

export interface V1alpha1ApplicationSourcePluginModelOptions {
  env?: Array<Applicationv1alpha1EnvEntry>;
  name?: string;
  parameters?: Array<V1alpha1ApplicationSourcePluginParameter>;
}
