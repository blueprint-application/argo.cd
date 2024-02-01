import { BaseModel } from '../types';
import type { V1alpha1SCMProviderGeneratorFilterModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SCMProviderGeneratorFilterModel extends BaseModel {
  // A regex which must match the branch name.
  branchMatch?: string;
  // A regex which must match at least one label.
  labelMatch?: string;
  // An array of paths, all of which must not exist.
  pathsDoNotExist?: Array<string>;
  // An array of paths, all of which must exist.
  pathsExist?: Array<string>;
  // A regex for repo names.
  repositoryMatch?: string;

  constructor(data: V1alpha1SCMProviderGeneratorFilterModelOptions) {
    super();
    validate(data);
    this.branchMatch = data.branchMatch;
    this.labelMatch = data.labelMatch;
    this.pathsDoNotExist = data.pathsDoNotExist;
    this.pathsExist = data.pathsExist;
    this.repositoryMatch = data.repositoryMatch;
  }

  static create(data: V1alpha1SCMProviderGeneratorFilterModelOptions): V1alpha1SCMProviderGeneratorFilterModel {
    return new V1alpha1SCMProviderGeneratorFilterModel(data);
  }

  toObject(): Partial<this> {
    return {
      branchMatch: this.branchMatch,
      labelMatch: this.labelMatch,
      pathsDoNotExist: this.pathsDoNotExist,
      pathsExist: this.pathsExist,
      repositoryMatch: this.repositoryMatch,
    } as Partial<this>;
  }
}

export default V1alpha1SCMProviderGeneratorFilterModel;
