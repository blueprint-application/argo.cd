import { BaseModel } from '../types';
import type { V1alpha1ResourceRefModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ResourceRefModel extends BaseModel {
  group?: string;
  kind?: string;
  name?: string;
  namespace?: string;
  uid?: string;
  version?: string;

  constructor(data: V1alpha1ResourceRefModelOptions) {
    super();
    validate(data);
    this.group = data.group;
    this.kind = data.kind;
    this.name = data.name;
    this.namespace = data.namespace;
    this.uid = data.uid;
    this.version = data.version;
  }

  static create(data: V1alpha1ResourceRefModelOptions): V1alpha1ResourceRefModel {
    return new V1alpha1ResourceRefModel(data);
  }

  toObject(): Partial<this> {
    return {
      group: this.group,
      kind: this.kind,
      name: this.name,
      namespace: this.namespace,
      uid: this.uid,
      version: this.version,
    } as Partial<this>;
  }
}

export default V1alpha1ResourceRefModel;
