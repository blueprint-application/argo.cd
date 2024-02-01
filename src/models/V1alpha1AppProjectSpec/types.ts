import { V1GroupKindModelOptions as V1GroupKind } from '../V1GroupKind';
import { V1alpha1ApplicationDestinationModelOptions as V1alpha1ApplicationDestination } from '../V1alpha1ApplicationDestination';
import { V1alpha1OrphanedResourcesMonitorSettingsModelOptions as V1alpha1OrphanedResourcesMonitorSettings } from '../V1alpha1OrphanedResourcesMonitorSettings';
import { V1alpha1ProjectRoleModelOptions as V1alpha1ProjectRole } from '../V1alpha1ProjectRole';
import { V1alpha1SignatureKeyModelOptions as V1alpha1SignatureKey } from '../V1alpha1SignatureKey';
import { V1alpha1SyncWindowModelOptions as V1alpha1SyncWindow } from '../V1alpha1SyncWindow';

export interface V1alpha1AppProjectSpecModelOptions {
  clusterResourceBlacklist?: Array<V1GroupKind>;
  clusterResourceWhitelist?: Array<V1GroupKind>;
  description?: string;
  destinations?: Array<V1alpha1ApplicationDestination>;
  namespaceResourceBlacklist?: Array<V1GroupKind>;
  namespaceResourceWhitelist?: Array<V1GroupKind>;
  orphanedResources?: V1alpha1OrphanedResourcesMonitorSettings;
  permitOnlyProjectScopedClusters?: boolean;
  roles?: Array<V1alpha1ProjectRole>;
  signatureKeys?: Array<V1alpha1SignatureKey>;
  sourceNamespaces?: Array<string>;
  sourceRepos?: Array<string>;
  syncWindows?: Array<V1alpha1SyncWindow>;
}
