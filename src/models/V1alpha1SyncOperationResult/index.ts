import { V1alpha1ApplicationSourceModelOptions as V1alpha1ApplicationSource } from '../V1alpha1ApplicationSource';
import { V1alpha1ManagedNamespaceMetadataModelOptions as V1alpha1ManagedNamespaceMetadata } from '../V1alpha1ManagedNamespaceMetadata';
import { V1alpha1ResourceResultModelOptions as V1alpha1ResourceResult } from '../V1alpha1ResourceResult';
import { BaseModel } from '../types';
import type { V1alpha1SyncOperationResultModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SyncOperationResultModel extends BaseModel {
  managedNamespaceMetadata?: V1alpha1ManagedNamespaceMetadata;
  resources?: Array<V1alpha1ResourceResult>;
  revision?: string;
  revisions?: Array<string>;
  source?: V1alpha1ApplicationSource;
  sources?: Array<V1alpha1ApplicationSource>;

  constructor(data: V1alpha1SyncOperationResultModelOptions) {
    super();
    validate(data);
    this.managedNamespaceMetadata = data.managedNamespaceMetadata;
    this.resources = data.resources;
    this.revision = data.revision;
    this.revisions = data.revisions;
    this.source = data.source;
    this.sources = data.sources;
  }

  static create(data: V1alpha1SyncOperationResultModelOptions): V1alpha1SyncOperationResultModel {
    return new V1alpha1SyncOperationResultModel(data);
  }

  toObject(): Partial<this> {
    return {
      managedNamespaceMetadata: this.managedNamespaceMetadata,
      resources: this.resources,
      revision: this.revision,
      revisions: this.revisions,
      source: this.source,
      sources: this.sources,
    } as Partial<this>;
  }
}

export default V1alpha1SyncOperationResultModel;
