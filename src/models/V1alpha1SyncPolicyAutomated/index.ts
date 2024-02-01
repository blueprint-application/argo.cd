import { BaseModel } from '../types';
import type { V1alpha1SyncPolicyAutomatedModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SyncPolicyAutomatedModel extends BaseModel {
  allowEmpty?: boolean;
  prune?: boolean;
  selfHeal?: boolean;

  constructor(data: V1alpha1SyncPolicyAutomatedModelOptions) {
    super();
    validate(data);
    this.allowEmpty = data.allowEmpty;
    this.prune = data.prune;
    this.selfHeal = data.selfHeal;
  }

  static create(data: V1alpha1SyncPolicyAutomatedModelOptions): V1alpha1SyncPolicyAutomatedModel {
    return new V1alpha1SyncPolicyAutomatedModel(data);
  }

  toObject(): Partial<this> {
    return {
      allowEmpty: this.allowEmpty,
      prune: this.prune,
      selfHeal: this.selfHeal,
    } as Partial<this>;
  }
}

export default V1alpha1SyncPolicyAutomatedModel;
