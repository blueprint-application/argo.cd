import { BaseModel } from '../types';
import type { V1alpha1GnuPGPublicKeyModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1GnuPGPublicKeyModel extends BaseModel {
  fingerprint?: string;
  keyData?: string;
  keyID?: string;
  owner?: string;
  subType?: string;
  trust?: string;

  constructor(data: V1alpha1GnuPGPublicKeyModelOptions) {
    super();
    validate(data);
    this.fingerprint = data.fingerprint;
    this.keyData = data.keyData;
    this.keyID = data.keyID;
    this.owner = data.owner;
    this.subType = data.subType;
    this.trust = data.trust;
  }

  static create(data: V1alpha1GnuPGPublicKeyModelOptions): V1alpha1GnuPGPublicKeyModel {
    return new V1alpha1GnuPGPublicKeyModel(data);
  }

  toObject(): Partial<this> {
    return {
      fingerprint: this.fingerprint,
      keyData: this.keyData,
      keyID: this.keyID,
      owner: this.owner,
      subType: this.subType,
      trust: this.trust,
    } as Partial<this>;
  }
}

export default V1alpha1GnuPGPublicKeyModel;
