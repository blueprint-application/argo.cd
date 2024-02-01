import { V1alpha1ApplicationSourceModelOptions as V1alpha1ApplicationSource } from '../V1alpha1ApplicationSource';
import { BaseModel } from '../types';
import type { RepositoryRepoAppDetailsQueryModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class RepositoryRepoAppDetailsQueryModel extends BaseModel {
  appName?: string;
  appProject?: string;
  source?: V1alpha1ApplicationSource;

  constructor(data: RepositoryRepoAppDetailsQueryModelOptions) {
    super();
    validate(data);
    this.appName = data.appName;
    this.appProject = data.appProject;
    this.source = data.source;
  }

  static create(data: RepositoryRepoAppDetailsQueryModelOptions): RepositoryRepoAppDetailsQueryModel {
    return new RepositoryRepoAppDetailsQueryModel(data);
  }

  toObject(): Partial<this> {
    return {
      appName: this.appName,
      appProject: this.appProject,
      source: this.source,
    } as Partial<this>;
  }
}

export default RepositoryRepoAppDetailsQueryModel;
