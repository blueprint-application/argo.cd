import { BaseModel } from '../types';
import type { V1ObjectReferenceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1ObjectReferenceModel extends BaseModel {
  apiVersion?: string;
  fieldPath?: string;
  kind?: string;
  name?: string;
  namespace?: string;
  resourceVersion?: string;
  uid?: string;

  constructor(data: V1ObjectReferenceModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.fieldPath = data.fieldPath;
    this.kind = data.kind;
    this.name = data.name;
    this.namespace = data.namespace;
    this.resourceVersion = data.resourceVersion;
    this.uid = data.uid;
  }

  static create(data: V1ObjectReferenceModelOptions): V1ObjectReferenceModel {
    return new V1ObjectReferenceModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      fieldPath: this.fieldPath,
      kind: this.kind,
      name: this.name,
      namespace: this.namespace,
      resourceVersion: this.resourceVersion,
      uid: this.uid,
    } as Partial<this>;
  }
}

export default V1ObjectReferenceModel;
