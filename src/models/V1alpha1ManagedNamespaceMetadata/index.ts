import { BaseModel } from '../types';
import type { V1alpha1ManagedNamespaceMetadataModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ManagedNamespaceMetadataModel extends BaseModel {
  annotations?: { [key: string]: string };
  labels?: { [key: string]: string };

  constructor(data: V1alpha1ManagedNamespaceMetadataModelOptions) {
    super();
    validate(data);
    this.annotations = data.annotations;
    this.labels = data.labels;
  }

  static create(data: V1alpha1ManagedNamespaceMetadataModelOptions): V1alpha1ManagedNamespaceMetadataModel {
    return new V1alpha1ManagedNamespaceMetadataModel(data);
  }

  toObject(): Partial<this> {
    return {
      annotations: this.annotations,
      labels: this.labels,
    } as Partial<this>;
  }
}

export default V1alpha1ManagedNamespaceMetadataModel;
