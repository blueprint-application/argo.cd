import { IntstrIntOrStringModelOptions as IntstrIntOrString } from '../IntstrIntOrString';
import { BaseModel } from '../types';
import type { V1alpha1KustomizeReplicaModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1KustomizeReplicaModel extends BaseModel {
  count?: IntstrIntOrString;
  name?: string;

  constructor(data: V1alpha1KustomizeReplicaModelOptions) {
    super();
    validate(data);
    this.count = data.count;
    this.name = data.name;
  }

  static create(data: V1alpha1KustomizeReplicaModelOptions): V1alpha1KustomizeReplicaModel {
    return new V1alpha1KustomizeReplicaModel(data);
  }

  toObject(): Partial<this> {
    return {
      count: this.count,
      name: this.name,
    } as Partial<this>;
  }
}

export default V1alpha1KustomizeReplicaModel;
