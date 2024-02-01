import { BaseModel } from '../types';
import type { V1alpha1ApplicationSetSyncPolicyModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationSetSyncPolicyModel extends BaseModel {
  applicationsSync?: string;
  // PreserveResourcesOnDeletion will preserve resources on deletion. If PreserveResourcesOnDeletion is set to true, these Applications will not be deleted.
  preserveResourcesOnDeletion?: boolean;

  constructor(data: V1alpha1ApplicationSetSyncPolicyModelOptions) {
    super();
    validate(data);
    this.applicationsSync = data.applicationsSync;
    this.preserveResourcesOnDeletion = data.preserveResourcesOnDeletion;
  }

  static create(data: V1alpha1ApplicationSetSyncPolicyModelOptions): V1alpha1ApplicationSetSyncPolicyModel {
    return new V1alpha1ApplicationSetSyncPolicyModel(data);
  }

  toObject(): Partial<this> {
    return {
      applicationsSync: this.applicationsSync,
      preserveResourcesOnDeletion: this.preserveResourcesOnDeletion,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationSetSyncPolicyModel;
