import { BaseModel } from '../types';
import type { V1alpha1SignatureKeyModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SignatureKeyModel extends BaseModel {
  keyID?: string;

  constructor(data: V1alpha1SignatureKeyModelOptions) {
    super();
    validate(data);
    this.keyID = data.keyID;
  }

  static create(data: V1alpha1SignatureKeyModelOptions): V1alpha1SignatureKeyModel {
    return new V1alpha1SignatureKeyModel(data);
  }

  toObject(): Partial<this> {
    return {
      keyID: this.keyID,
    } as Partial<this>;
  }
}

export default V1alpha1SignatureKeyModel;
