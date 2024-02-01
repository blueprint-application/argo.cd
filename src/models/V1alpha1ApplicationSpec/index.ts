import { V1alpha1ApplicationDestinationModelOptions as V1alpha1ApplicationDestination } from '../V1alpha1ApplicationDestination';
import { V1alpha1ApplicationSourceModelOptions as V1alpha1ApplicationSource } from '../V1alpha1ApplicationSource';
import { V1alpha1InfoModelOptions as V1alpha1Info } from '../V1alpha1Info';
import { V1alpha1ResourceIgnoreDifferencesModelOptions as V1alpha1ResourceIgnoreDifferences } from '../V1alpha1ResourceIgnoreDifferences';
import { V1alpha1SyncPolicyModelOptions as V1alpha1SyncPolicy } from '../V1alpha1SyncPolicy';
import { BaseModel } from '../types';
import type { V1alpha1ApplicationSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationSpecModel extends BaseModel {
  destination?: V1alpha1ApplicationDestination;
  ignoreDifferences?: Array<V1alpha1ResourceIgnoreDifferences>;
  info?: Array<V1alpha1Info>;
  // Project is a reference to the project this application belongs to. The empty string means that application belongs to the \'default\' project.
  project?: string;
  // RevisionHistoryLimit limits the number of items kept in the application\'s revision history, which is used for informational purposes as well as for rollbacks to previous versions. This should only be changed in exceptional circumstances. Setting to zero will store no history. This will reduce storage used. Increasing will increase the space used to store the history, so we do not recommend increasing it. Default is 10.
  revisionHistoryLimit?: string;
  source?: V1alpha1ApplicationSource;
  sources?: Array<V1alpha1ApplicationSource>;
  syncPolicy?: V1alpha1SyncPolicy;

  constructor(data: V1alpha1ApplicationSpecModelOptions) {
    super();
    validate(data);
    this.destination = data.destination;
    this.ignoreDifferences = data.ignoreDifferences;
    this.info = data.info;
    this.project = data.project;
    this.revisionHistoryLimit = data.revisionHistoryLimit;
    this.source = data.source;
    this.sources = data.sources;
    this.syncPolicy = data.syncPolicy;
  }

  static create(data: V1alpha1ApplicationSpecModelOptions): V1alpha1ApplicationSpecModel {
    return new V1alpha1ApplicationSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      destination: this.destination,
      ignoreDifferences: this.ignoreDifferences,
      info: this.info,
      project: this.project,
      revisionHistoryLimit: this.revisionHistoryLimit,
      source: this.source,
      sources: this.sources,
      syncPolicy: this.syncPolicy,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationSpecModel;
