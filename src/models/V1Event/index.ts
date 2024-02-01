import { V1EventSeriesModelOptions as V1EventSeries } from '../V1EventSeries';
import { V1EventSourceModelOptions as V1EventSource } from '../V1EventSource';
import { V1MicroTimeModelOptions as V1MicroTime } from '../V1MicroTime';
import { V1ObjectMetaModelOptions as V1ObjectMeta } from '../V1ObjectMeta';
import { V1ObjectReferenceModelOptions as V1ObjectReference } from '../V1ObjectReference';
import { BaseModel } from '../types';
import type { V1EventModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1EventModel extends BaseModel {
  action?: string;
  count?: number;
  eventTime?: V1MicroTime;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal=false +protobuf.as=Timestamp +protobuf.options.(gogoproto.goproto_stringer)=false
  firstTimestamp?: Date;
  involvedObject?: V1ObjectReference;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal=false +protobuf.as=Timestamp +protobuf.options.(gogoproto.goproto_stringer)=false
  lastTimestamp?: Date;
  message?: string;
  metadata?: V1ObjectMeta;
  reason?: string;
  related?: V1ObjectReference;
  reportingComponent?: string;
  reportingInstance?: string;
  series?: V1EventSeries;
  source?: V1EventSource;
  type?: string;

  constructor(data: V1EventModelOptions) {
    super();
    validate(data);
    this.action = data.action;
    this.count = data.count;
    this.eventTime = data.eventTime;
    this.firstTimestamp = data.firstTimestamp;
    this.involvedObject = data.involvedObject;
    this.lastTimestamp = data.lastTimestamp;
    this.message = data.message;
    this.metadata = data.metadata;
    this.reason = data.reason;
    this.related = data.related;
    this.reportingComponent = data.reportingComponent;
    this.reportingInstance = data.reportingInstance;
    this.series = data.series;
    this.source = data.source;
    this.type = data.type;
  }

  static create(data: V1EventModelOptions): V1EventModel {
    return new V1EventModel(data);
  }

  toObject(): Partial<this> {
    return {
      action: this.action,
      count: this.count,
      eventTime: this.eventTime,
      firstTimestamp: this.firstTimestamp,
      involvedObject: this.involvedObject,
      lastTimestamp: this.lastTimestamp,
      message: this.message,
      metadata: this.metadata,
      reason: this.reason,
      related: this.related,
      reportingComponent: this.reportingComponent,
      reportingInstance: this.reportingInstance,
      series: this.series,
      source: this.source,
      type: this.type,
    } as Partial<this>;
  }
}

export default V1EventModel;
