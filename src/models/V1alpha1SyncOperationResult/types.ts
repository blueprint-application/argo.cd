import { V1alpha1ApplicationSourceModelOptions as V1alpha1ApplicationSource } from '../V1alpha1ApplicationSource';
import { V1alpha1ManagedNamespaceMetadataModelOptions as V1alpha1ManagedNamespaceMetadata } from '../V1alpha1ManagedNamespaceMetadata';
import { V1alpha1ResourceResultModelOptions as V1alpha1ResourceResult } from '../V1alpha1ResourceResult';

export interface V1alpha1SyncOperationResultModelOptions {
  managedNamespaceMetadata?: V1alpha1ManagedNamespaceMetadata;
  resources?: Array<V1alpha1ResourceResult>;
  revision?: string;
  revisions?: Array<string>;
  source?: V1alpha1ApplicationSource;
  sources?: Array<V1alpha1ApplicationSource>;
}
