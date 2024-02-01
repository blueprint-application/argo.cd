import { V1alpha1CommandModelOptions as V1alpha1Command } from '../V1alpha1Command';

export interface V1alpha1ConfigManagementPluginModelOptions {
  generate?: V1alpha1Command;
  init?: V1alpha1Command;
  lockRepo?: boolean;
  name?: string;
}
