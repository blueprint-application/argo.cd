import { V1alpha1ManagedNamespaceMetadataModelOptions as V1alpha1ManagedNamespaceMetadata } from '../V1alpha1ManagedNamespaceMetadata';
import { V1alpha1RetryStrategyModelOptions as V1alpha1RetryStrategy } from '../V1alpha1RetryStrategy';
import { V1alpha1SyncPolicyAutomatedModelOptions as V1alpha1SyncPolicyAutomated } from '../V1alpha1SyncPolicyAutomated';

export interface V1alpha1SyncPolicyModelOptions {
  automated?: V1alpha1SyncPolicyAutomated;
  managedNamespaceMetadata?: V1alpha1ManagedNamespaceMetadata;
  retry?: V1alpha1RetryStrategy;
  syncOptions?: Array<string>;
}
