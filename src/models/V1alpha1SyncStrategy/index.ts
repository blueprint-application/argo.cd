import { V1alpha1SyncStrategyApplyModelOptions as V1alpha1SyncStrategyApply } from '../V1alpha1SyncStrategyApply';
import { V1alpha1SyncStrategyHookModelOptions as V1alpha1SyncStrategyHook } from '../V1alpha1SyncStrategyHook';
import { BaseModel } from '../types';
import type { V1alpha1SyncStrategyModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SyncStrategyModel extends BaseModel {
  apply?: V1alpha1SyncStrategyApply;
  hook?: V1alpha1SyncStrategyHook;

  constructor(data: V1alpha1SyncStrategyModelOptions) {
    super();
    validate(data);
    this.apply = data.apply;
    this.hook = data.hook;
  }

  static create(data: V1alpha1SyncStrategyModelOptions): V1alpha1SyncStrategyModel {
    return new V1alpha1SyncStrategyModel(data);
  }

  toObject(): Partial<this> {
    return {
      apply: this.apply,
      hook: this.hook,
    } as Partial<this>;
  }
}

export default V1alpha1SyncStrategyModel;
