import { V1alpha1ApplicationSourceModelOptions as V1alpha1ApplicationSource } from '../V1alpha1ApplicationSource';
import { V1alpha1SyncOperationResourceModelOptions as V1alpha1SyncOperationResource } from '../V1alpha1SyncOperationResource';
import { V1alpha1SyncStrategyModelOptions as V1alpha1SyncStrategy } from '../V1alpha1SyncStrategy';

export interface V1alpha1SyncOperationModelOptions {
  dryRun?: boolean;
  manifests?: Array<string>;
  prune?: boolean;
  resources?: Array<V1alpha1SyncOperationResource>;
  revision?: string;
  revisions?: Array<string>;
  source?: V1alpha1ApplicationSource;
  sources?: Array<V1alpha1ApplicationSource>;
  syncOptions?: Array<string>;
  syncStrategy?: V1alpha1SyncStrategy;
}
