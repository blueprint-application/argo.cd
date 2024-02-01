import { V1EventSeriesModelOptions as V1EventSeries } from '../V1EventSeries';
import { V1EventSourceModelOptions as V1EventSource } from '../V1EventSource';
import { V1MicroTimeModelOptions as V1MicroTime } from '../V1MicroTime';
import { V1ObjectMetaModelOptions as V1ObjectMeta } from '../V1ObjectMeta';
import { V1ObjectReferenceModelOptions as V1ObjectReference } from '../V1ObjectReference';

export interface V1EventModelOptions {
  action?: string;
  count?: number;
  eventTime?: V1MicroTime;
  firstTimestamp?: Date;
  involvedObject?: V1ObjectReference;
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
}
