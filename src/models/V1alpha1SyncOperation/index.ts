import { V1alpha1ApplicationSourceModelOptions as V1alpha1ApplicationSource } from '../V1alpha1ApplicationSource';
import { V1alpha1SyncOperationResourceModelOptions as V1alpha1SyncOperationResource } from '../V1alpha1SyncOperationResource';
import { V1alpha1SyncStrategyModelOptions as V1alpha1SyncStrategy } from '../V1alpha1SyncStrategy';
import { BaseModel } from '../types';
import type { V1alpha1SyncOperationModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SyncOperationModel extends BaseModel {
  dryRun?: boolean;
  manifests?: Array<string>;
  prune?: boolean;
  resources?: Array<V1alpha1SyncOperationResource>;
  // Revision is the revision (Git) or chart version (Helm) which to sync the application to If omitted, will use the revision specified in app spec.
  revision?: string;
  // Revisions is the list of revision (Git) or chart version (Helm) which to sync each source in sources field for the application to If omitted, will use the revision specified in app spec.
  revisions?: Array<string>;
  source?: V1alpha1ApplicationSource;
  sources?: Array<V1alpha1ApplicationSource>;
  syncOptions?: Array<string>;
  syncStrategy?: V1alpha1SyncStrategy;

  constructor(data: V1alpha1SyncOperationModelOptions) {
    super();
    validate(data);
    this.dryRun = data.dryRun;
    this.manifests = data.manifests;
    this.prune = data.prune;
    this.resources = data.resources;
    this.revision = data.revision;
    this.revisions = data.revisions;
    this.source = data.source;
    this.sources = data.sources;
    this.syncOptions = data.syncOptions;
    this.syncStrategy = data.syncStrategy;
  }

  static create(data: V1alpha1SyncOperationModelOptions): V1alpha1SyncOperationModel {
    return new V1alpha1SyncOperationModel(data);
  }

  toObject(): Partial<this> {
    return {
      dryRun: this.dryRun,
      manifests: this.manifests,
      prune: this.prune,
      resources: this.resources,
      revision: this.revision,
      revisions: this.revisions,
      source: this.source,
      sources: this.sources,
      syncOptions: this.syncOptions,
      syncStrategy: this.syncStrategy,
    } as Partial<this>;
  }
}

export default V1alpha1SyncOperationModel;
