import { BaseModel } from '../types';
import type { V1MicroTimeModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1MicroTimeModel extends BaseModel {
  // Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. This field may be limited in precision depending on context.
  nanos?: number;
  // Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
  seconds?: string;

  constructor(data: V1MicroTimeModelOptions) {
    super();
    validate(data);
    this.nanos = data.nanos;
    this.seconds = data.seconds;
  }

  static create(data: V1MicroTimeModelOptions): V1MicroTimeModel {
    return new V1MicroTimeModel(data);
  }

  toObject(): Partial<this> {
    return {
      nanos: this.nanos,
      seconds: this.seconds,
    } as Partial<this>;
  }
}

export default V1MicroTimeModel;
