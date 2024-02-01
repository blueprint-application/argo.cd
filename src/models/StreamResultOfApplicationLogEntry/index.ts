import { ApplicationLogEntryModelOptions as ApplicationLogEntry } from '../ApplicationLogEntry';
import { RuntimeStreamErrorModelOptions as RuntimeStreamError } from '../RuntimeStreamError';
import { BaseModel } from '../types';
import type { StreamResultOfApplicationLogEntryModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class StreamResultOfApplicationLogEntryModel extends BaseModel {
  error?: RuntimeStreamError;
  result?: ApplicationLogEntry;

  constructor(data: StreamResultOfApplicationLogEntryModelOptions) {
    super();
    validate(data);
    this.error = data.error;
    this.result = data.result;
  }

  static create(data: StreamResultOfApplicationLogEntryModelOptions): StreamResultOfApplicationLogEntryModel {
    return new StreamResultOfApplicationLogEntryModel(data);
  }

  toObject(): Partial<this> {
    return {
      error: this.error,
      result: this.result,
    } as Partial<this>;
  }
}

export default StreamResultOfApplicationLogEntryModel;
