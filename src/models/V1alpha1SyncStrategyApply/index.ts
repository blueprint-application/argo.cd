import { BaseModel } from '../types';
import type { V1alpha1SyncStrategyApplyModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SyncStrategyApplyModel extends BaseModel {
  // Force indicates whether or not to supply the --force flag to `kubectl apply`. The --force flag deletes and re-create the resource, when PATCH encounters conflict and has retried for 5 times.
  force?: boolean;

  constructor(data: V1alpha1SyncStrategyApplyModelOptions) {
    super();
    validate(data);
    this.force = data.force;
  }

  static create(data: V1alpha1SyncStrategyApplyModelOptions): V1alpha1SyncStrategyApplyModel {
    return new V1alpha1SyncStrategyApplyModel(data);
  }

  toObject(): Partial<this> {
    return {
      force: this.force,
    } as Partial<this>;
  }
}

export default V1alpha1SyncStrategyApplyModel;
