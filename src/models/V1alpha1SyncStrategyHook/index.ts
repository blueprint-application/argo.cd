import { V1alpha1SyncStrategyApplyModelOptions as V1alpha1SyncStrategyApply } from '../V1alpha1SyncStrategyApply';
import { BaseModel } from '../types';
import type { V1alpha1SyncStrategyHookModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SyncStrategyHookModel extends BaseModel {
  syncStrategyApply?: V1alpha1SyncStrategyApply;

  constructor(data: V1alpha1SyncStrategyHookModelOptions) {
    super();
    validate(data);
    this.syncStrategyApply = data.syncStrategyApply;
  }

  static create(data: V1alpha1SyncStrategyHookModelOptions): V1alpha1SyncStrategyHookModel {
    return new V1alpha1SyncStrategyHookModel(data);
  }

  toObject(): Partial<this> {
    return {
      syncStrategyApply: this.syncStrategyApply,
    } as Partial<this>;
  }
}

export default V1alpha1SyncStrategyHookModel;
