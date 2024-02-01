import { V1alpha1ManagedNamespaceMetadataModelOptions as V1alpha1ManagedNamespaceMetadata } from '../V1alpha1ManagedNamespaceMetadata';
import { V1alpha1RetryStrategyModelOptions as V1alpha1RetryStrategy } from '../V1alpha1RetryStrategy';
import { V1alpha1SyncPolicyAutomatedModelOptions as V1alpha1SyncPolicyAutomated } from '../V1alpha1SyncPolicyAutomated';
import { BaseModel } from '../types';
import type { V1alpha1SyncPolicyModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SyncPolicyModel extends BaseModel {
  automated?: V1alpha1SyncPolicyAutomated;
  managedNamespaceMetadata?: V1alpha1ManagedNamespaceMetadata;
  retry?: V1alpha1RetryStrategy;
  syncOptions?: Array<string>;

  constructor(data: V1alpha1SyncPolicyModelOptions) {
    super();
    validate(data);
    this.automated = data.automated;
    this.managedNamespaceMetadata = data.managedNamespaceMetadata;
    this.retry = data.retry;
    this.syncOptions = data.syncOptions;
  }

  static create(data: V1alpha1SyncPolicyModelOptions): V1alpha1SyncPolicyModel {
    return new V1alpha1SyncPolicyModel(data);
  }

  toObject(): Partial<this> {
    return {
      automated: this.automated,
      managedNamespaceMetadata: this.managedNamespaceMetadata,
      retry: this.retry,
      syncOptions: this.syncOptions,
    } as Partial<this>;
  }
}

export default V1alpha1SyncPolicyModel;
