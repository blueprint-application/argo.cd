import { BaseModel } from '../types';
import type { V1OwnerReferenceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1OwnerReferenceModel extends BaseModel {
  // API version of the referent.
  apiVersion?: string;
  blockOwnerDeletion?: boolean;
  controller?: boolean;
  kind?: string;
  name?: string;
  uid?: string;

  constructor(data: V1OwnerReferenceModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.blockOwnerDeletion = data.blockOwnerDeletion;
    this.controller = data.controller;
    this.kind = data.kind;
    this.name = data.name;
    this.uid = data.uid;
  }

  static create(data: V1OwnerReferenceModelOptions): V1OwnerReferenceModel {
    return new V1OwnerReferenceModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      blockOwnerDeletion: this.blockOwnerDeletion,
      controller: this.controller,
      kind: this.kind,
      name: this.name,
      uid: this.uid,
    } as Partial<this>;
  }
}

export default V1OwnerReferenceModel;
