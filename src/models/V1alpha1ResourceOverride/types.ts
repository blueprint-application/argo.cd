import { V1alpha1KnownTypeFieldModelOptions as V1alpha1KnownTypeField } from '../V1alpha1KnownTypeField';
import { V1alpha1OverrideIgnoreDiffModelOptions as V1alpha1OverrideIgnoreDiff } from '../V1alpha1OverrideIgnoreDiff';

export interface V1alpha1ResourceOverrideModelOptions {
  actions?: string;
  healthLua?: string;
  ignoreDifferences?: V1alpha1OverrideIgnoreDiff;
  ignoreResourceUpdates?: V1alpha1OverrideIgnoreDiff;
  knownTypeFields?: Array<V1alpha1KnownTypeField>;
  useOpenLibs?: boolean;
}
