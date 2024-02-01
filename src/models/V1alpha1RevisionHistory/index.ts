import { V1alpha1ApplicationSourceModelOptions as V1alpha1ApplicationSource } from '../V1alpha1ApplicationSource';
import { BaseModel } from '../types';
import type { V1alpha1RevisionHistoryModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1RevisionHistoryModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal=false +protobuf.as=Timestamp +protobuf.options.(gogoproto.goproto_stringer)=false
  deployStartedAt?: Date;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal=false +protobuf.as=Timestamp +protobuf.options.(gogoproto.goproto_stringer)=false
  deployedAt?: Date;
  id?: string;
  revision?: string;
  revisions?: Array<string>;
  source?: V1alpha1ApplicationSource;
  sources?: Array<V1alpha1ApplicationSource>;

  constructor(data: V1alpha1RevisionHistoryModelOptions) {
    super();
    validate(data);
    this.deployStartedAt = data.deployStartedAt;
    this.deployedAt = data.deployedAt;
    this.id = data.id;
    this.revision = data.revision;
    this.revisions = data.revisions;
    this.source = data.source;
    this.sources = data.sources;
  }

  static create(data: V1alpha1RevisionHistoryModelOptions): V1alpha1RevisionHistoryModel {
    return new V1alpha1RevisionHistoryModel(data);
  }

  toObject(): Partial<this> {
    return {
      deployStartedAt: this.deployStartedAt,
      deployedAt: this.deployedAt,
      id: this.id,
      revision: this.revision,
      revisions: this.revisions,
      source: this.source,
      sources: this.sources,
    } as Partial<this>;
  }
}

export default V1alpha1RevisionHistoryModel;
