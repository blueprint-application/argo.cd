import { V1alpha1SyncStrategyApplyModelOptions as V1alpha1SyncStrategyApply } from '../V1alpha1SyncStrategyApply';
import { V1alpha1SyncStrategyHookModelOptions as V1alpha1SyncStrategyHook } from '../V1alpha1SyncStrategyHook';

export interface V1alpha1SyncStrategyModelOptions {
  apply?: V1alpha1SyncStrategyApply;
  hook?: V1alpha1SyncStrategyHook;
}
