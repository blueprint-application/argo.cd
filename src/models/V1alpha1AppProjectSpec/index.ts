import { V1GroupKindModelOptions as V1GroupKind } from '../V1GroupKind';
import { V1alpha1ApplicationDestinationModelOptions as V1alpha1ApplicationDestination } from '../V1alpha1ApplicationDestination';
import { V1alpha1OrphanedResourcesMonitorSettingsModelOptions as V1alpha1OrphanedResourcesMonitorSettings } from '../V1alpha1OrphanedResourcesMonitorSettings';
import { V1alpha1ProjectRoleModelOptions as V1alpha1ProjectRole } from '../V1alpha1ProjectRole';
import { V1alpha1SignatureKeyModelOptions as V1alpha1SignatureKey } from '../V1alpha1SignatureKey';
import { V1alpha1SyncWindowModelOptions as V1alpha1SyncWindow } from '../V1alpha1SyncWindow';
import { BaseModel } from '../types';
import type { V1alpha1AppProjectSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1AppProjectSpecModel extends BaseModel {
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

  constructor(data: V1alpha1AppProjectSpecModelOptions) {
    super();
    validate(data);
    this.clusterResourceBlacklist = data.clusterResourceBlacklist;
    this.clusterResourceWhitelist = data.clusterResourceWhitelist;
    this.description = data.description;
    this.destinations = data.destinations;
    this.namespaceResourceBlacklist = data.namespaceResourceBlacklist;
    this.namespaceResourceWhitelist = data.namespaceResourceWhitelist;
    this.orphanedResources = data.orphanedResources;
    this.permitOnlyProjectScopedClusters = data.permitOnlyProjectScopedClusters;
    this.roles = data.roles;
    this.signatureKeys = data.signatureKeys;
    this.sourceNamespaces = data.sourceNamespaces;
    this.sourceRepos = data.sourceRepos;
    this.syncWindows = data.syncWindows;
  }

  static create(data: V1alpha1AppProjectSpecModelOptions): V1alpha1AppProjectSpecModel {
    return new V1alpha1AppProjectSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      clusterResourceBlacklist: this.clusterResourceBlacklist,
      clusterResourceWhitelist: this.clusterResourceWhitelist,
      description: this.description,
      destinations: this.destinations,
      namespaceResourceBlacklist: this.namespaceResourceBlacklist,
      namespaceResourceWhitelist: this.namespaceResourceWhitelist,
      orphanedResources: this.orphanedResources,
      permitOnlyProjectScopedClusters: this.permitOnlyProjectScopedClusters,
      roles: this.roles,
      signatureKeys: this.signatureKeys,
      sourceNamespaces: this.sourceNamespaces,
      sourceRepos: this.sourceRepos,
      syncWindows: this.syncWindows,
    } as Partial<this>;
  }
}

export default V1alpha1AppProjectSpecModel;
