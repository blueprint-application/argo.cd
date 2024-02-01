import { RuntimeStreamErrorModelOptions as RuntimeStreamError } from '../RuntimeStreamError';
import { V1alpha1ApplicationWatchEventModelOptions as V1alpha1ApplicationWatchEvent } from '../V1alpha1ApplicationWatchEvent';
import { BaseModel } from '../types';
import type { StreamResultOfV1alpha1ApplicationWatchEventModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class StreamResultOfV1alpha1ApplicationWatchEventModel extends BaseModel {
  error?: RuntimeStreamError;
  result?: V1alpha1ApplicationWatchEvent;

  constructor(data: StreamResultOfV1alpha1ApplicationWatchEventModelOptions) {
    super();
    validate(data);
    this.error = data.error;
    this.result = data.result;
  }

  static create(
    data: StreamResultOfV1alpha1ApplicationWatchEventModelOptions,
  ): StreamResultOfV1alpha1ApplicationWatchEventModel {
    return new StreamResultOfV1alpha1ApplicationWatchEventModel(data);
  }

  toObject(): Partial<this> {
    return {
      error: this.error,
      result: this.result,
    } as Partial<this>;
  }
}

export default StreamResultOfV1alpha1ApplicationWatchEventModel;
