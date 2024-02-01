import { ApplicationSyncOptionsModelOptions as ApplicationSyncOptions } from '../ApplicationSyncOptions';
import { V1alpha1InfoModelOptions as V1alpha1Info } from '../V1alpha1Info';
import { V1alpha1RetryStrategyModelOptions as V1alpha1RetryStrategy } from '../V1alpha1RetryStrategy';
import { V1alpha1SyncOperationResourceModelOptions as V1alpha1SyncOperationResource } from '../V1alpha1SyncOperationResource';
import { V1alpha1SyncStrategyModelOptions as V1alpha1SyncStrategy } from '../V1alpha1SyncStrategy';
import { BaseModel } from '../types';
import type { ApplicationApplicationSyncRequestModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ApplicationApplicationSyncRequestModel extends BaseModel {
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

  constructor(data: ApplicationApplicationSyncRequestModelOptions) {
    super();
    validate(data);
    this.appNamespace = data.appNamespace;
    this.dryRun = data.dryRun;
    this.infos = data.infos;
    this.manifests = data.manifests;
    this.name = data.name;
    this.project = data.project;
    this.prune = data.prune;
    this.resources = data.resources;
    this.retryStrategy = data.retryStrategy;
    this.revision = data.revision;
    this.strategy = data.strategy;
    this.syncOptions = data.syncOptions;
  }

  static create(data: ApplicationApplicationSyncRequestModelOptions): ApplicationApplicationSyncRequestModel {
    return new ApplicationApplicationSyncRequestModel(data);
  }

  toObject(): Partial<this> {
    return {
      appNamespace: this.appNamespace,
      dryRun: this.dryRun,
      infos: this.infos,
      manifests: this.manifests,
      name: this.name,
      project: this.project,
      prune: this.prune,
      resources: this.resources,
      retryStrategy: this.retryStrategy,
      revision: this.revision,
      strategy: this.strategy,
      syncOptions: this.syncOptions,
    } as Partial<this>;
  }
}

export default ApplicationApplicationSyncRequestModel;
