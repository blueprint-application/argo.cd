import { V1alpha1ComparedToModelOptions as V1alpha1ComparedTo } from '../V1alpha1ComparedTo';

export interface V1alpha1SyncStatusModelOptions {
  comparedTo?: V1alpha1ComparedTo;
  revision?: string;
  revisions?: Array<string>;
  status?: string;
}
