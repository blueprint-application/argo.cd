import { V1alpha1GnuPGPublicKeyListModelOptions as V1alpha1GnuPGPublicKeyList } from '../V1alpha1GnuPGPublicKeyList';
import { BaseModel } from '../types';
import type { GpgkeyGnuPGPublicKeyCreateResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class GpgkeyGnuPGPublicKeyCreateResponseModel extends BaseModel {
  created?: V1alpha1GnuPGPublicKeyList;
  skipped?: Array<string>;

  constructor(data: GpgkeyGnuPGPublicKeyCreateResponseModelOptions) {
    super();
    validate(data);
    this.created = data.created;
    this.skipped = data.skipped;
  }

  static create(data: GpgkeyGnuPGPublicKeyCreateResponseModelOptions): GpgkeyGnuPGPublicKeyCreateResponseModel {
    return new GpgkeyGnuPGPublicKeyCreateResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      created: this.created,
      skipped: this.skipped,
    } as Partial<this>;
  }
}

export default GpgkeyGnuPGPublicKeyCreateResponseModel;
