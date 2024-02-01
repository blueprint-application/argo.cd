import { V1alpha1ApplicationSourceModelOptions as V1alpha1ApplicationSource } from '../V1alpha1ApplicationSource';

export interface V1alpha1RevisionHistoryModelOptions {
  deployStartedAt?: Date;
  deployedAt?: Date;
  id?: string;
  revision?: string;
  revisions?: Array<string>;
  source?: V1alpha1ApplicationSource;
  sources?: Array<V1alpha1ApplicationSource>;
}
