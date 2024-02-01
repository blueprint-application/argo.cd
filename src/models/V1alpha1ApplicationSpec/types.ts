import { V1alpha1ApplicationDestinationModelOptions as V1alpha1ApplicationDestination } from '../V1alpha1ApplicationDestination';
import { V1alpha1ApplicationSourceModelOptions as V1alpha1ApplicationSource } from '../V1alpha1ApplicationSource';
import { V1alpha1InfoModelOptions as V1alpha1Info } from '../V1alpha1Info';
import { V1alpha1ResourceIgnoreDifferencesModelOptions as V1alpha1ResourceIgnoreDifferences } from '../V1alpha1ResourceIgnoreDifferences';
import { V1alpha1SyncPolicyModelOptions as V1alpha1SyncPolicy } from '../V1alpha1SyncPolicy';

export interface V1alpha1ApplicationSpecModelOptions {
  destination?: V1alpha1ApplicationDestination;
  ignoreDifferences?: Array<V1alpha1ResourceIgnoreDifferences>;
  info?: Array<V1alpha1Info>;
  project?: string;
  revisionHistoryLimit?: string;
  source?: V1alpha1ApplicationSource;
  sources?: Array<V1alpha1ApplicationSource>;
  syncPolicy?: V1alpha1SyncPolicy;
}
