import { BaseModel } from '../types';
import type { ApplicationLogEntryModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ApplicationLogEntryModel extends BaseModel {
  content?: string;
  last?: boolean;
  podName?: string;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal=false +protobuf.as=Timestamp +protobuf.options.(gogoproto.goproto_stringer)=false
  timeStamp?: Date;
  timeStampStr?: string;

  constructor(data: ApplicationLogEntryModelOptions) {
    super();
    validate(data);
    this.content = data.content;
    this.last = data.last;
    this.podName = data.podName;
    this.timeStamp = data.timeStamp;
    this.timeStampStr = data.timeStampStr;
  }

  static create(data: ApplicationLogEntryModelOptions): ApplicationLogEntryModel {
    return new ApplicationLogEntryModel(data);
  }

  toObject(): Partial<this> {
    return {
      content: this.content,
      last: this.last,
      podName: this.podName,
      timeStamp: this.timeStamp,
      timeStampStr: this.timeStampStr,
    } as Partial<this>;
  }
}

export default ApplicationLogEntryModel;
