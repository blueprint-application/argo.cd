import { BaseModel } from '../types';
import type { V1alpha1PullRequestGeneratorFilterModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1PullRequestGeneratorFilterModel extends BaseModel {
  branchMatch?: string;
  targetBranchMatch?: string;

  constructor(data: V1alpha1PullRequestGeneratorFilterModelOptions) {
    super();
    validate(data);
    this.branchMatch = data.branchMatch;
    this.targetBranchMatch = data.targetBranchMatch;
  }

  static create(data: V1alpha1PullRequestGeneratorFilterModelOptions): V1alpha1PullRequestGeneratorFilterModel {
    return new V1alpha1PullRequestGeneratorFilterModel(data);
  }

  toObject(): Partial<this> {
    return {
      branchMatch: this.branchMatch,
      targetBranchMatch: this.targetBranchMatch,
    } as Partial<this>;
  }
}

export default V1alpha1PullRequestGeneratorFilterModel;
