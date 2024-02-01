import { V1alpha1TagFilterModelOptions as V1alpha1TagFilter } from '../V1alpha1TagFilter';

export interface V1alpha1SCMProviderGeneratorAWSCodeCommitModelOptions {
  allBranches?: boolean;
  region?: string;
  role?: string;
  tagFilters?: Array<V1alpha1TagFilter>;
}
