import { ApplicationSyncOptionsModelOptions as ApplicationSyncOptions } from '../ApplicationSyncOptions';
import { V1alpha1InfoModelOptions as V1alpha1Info } from '../V1alpha1Info';
import { V1alpha1RetryStrategyModelOptions as V1alpha1RetryStrategy } from '../V1alpha1RetryStrategy';
import { V1alpha1SyncOperationResourceModelOptions as V1alpha1SyncOperationResource } from '../V1alpha1SyncOperationResource';
import { V1alpha1SyncStrategyModelOptions as V1alpha1SyncStrategy } from '../V1alpha1SyncStrategy';

export interface ApplicationApplicationSyncRequestModelOptions {
  appNamespace?: string;
  dryRun?: boolean;
  infos?: Array<V1alpha1Info>;
  manifests?: Array<string>;
  name?: string;
  project?: string;
  prune?: boolean;
  resources?: Array<V1alpha1SyncOperationResource>;
  retryStrategy?: V1alpha1RetryStrategy;
  revision?: string;
  strategy?: V1alpha1SyncStrategy;
  syncOptions?: ApplicationSyncOptions;
}
