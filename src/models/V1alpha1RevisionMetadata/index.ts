import { BaseModel } from '../types';
import type { V1alpha1RevisionMetadataModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1RevisionMetadataModel extends BaseModel {
  author?: string;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal=false +protobuf.as=Timestamp +protobuf.options.(gogoproto.goproto_stringer)=false
  date?: Date;
  // Message contains the message associated with the revision, most likely the commit message.
  message?: string;
  // SignatureInfo contains a hint on the signer if the revision was signed with GPG, and signature verification is enabled.
  signatureInfo?: string;
  tags?: Array<string>;

  constructor(data: V1alpha1RevisionMetadataModelOptions) {
    super();
    validate(data);
    this.author = data.author;
    this.date = data.date;
    this.message = data.message;
    this.signatureInfo = data.signatureInfo;
    this.tags = data.tags;
  }

  static create(data: V1alpha1RevisionMetadataModelOptions): V1alpha1RevisionMetadataModel {
    return new V1alpha1RevisionMetadataModel(data);
  }

  toObject(): Partial<this> {
    return {
      author: this.author,
      date: this.date,
      message: this.message,
      signatureInfo: this.signatureInfo,
      tags: this.tags,
    } as Partial<this>;
  }
}

export default V1alpha1RevisionMetadataModel;
