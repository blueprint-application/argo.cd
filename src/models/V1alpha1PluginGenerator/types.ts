import { V1alpha1ApplicationSetTemplateModelOptions as V1alpha1ApplicationSetTemplate } from '../V1alpha1ApplicationSetTemplate';
import { V1alpha1PluginConfigMapRefModelOptions as V1alpha1PluginConfigMapRef } from '../V1alpha1PluginConfigMapRef';
import { V1alpha1PluginInputModelOptions as V1alpha1PluginInput } from '../V1alpha1PluginInput';

export interface V1alpha1PluginGeneratorModelOptions {
  configMapRef?: V1alpha1PluginConfigMapRef;
  input?: V1alpha1PluginInput;
  requeueAfterSeconds?: string;
  template?: V1alpha1ApplicationSetTemplate;
  values?: { [key: string]: string };
}
