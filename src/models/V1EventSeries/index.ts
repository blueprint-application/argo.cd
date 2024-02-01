import { V1MicroTimeModelOptions as V1MicroTime } from '../V1MicroTime';
import { BaseModel } from '../types';
import type { V1EventSeriesModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1EventSeriesModel extends BaseModel {
  count?: number;
  lastObservedTime?: V1MicroTime;

  constructor(data: V1EventSeriesModelOptions) {
    super();
    validate(data);
    this.count = data.count;
    this.lastObservedTime = data.lastObservedTime;
  }

  static create(data: V1EventSeriesModelOptions): V1EventSeriesModel {
    return new V1EventSeriesModel(data);
  }

  toObject(): Partial<this> {
    return {
      count: this.count,
      lastObservedTime: this.lastObservedTime,
    } as Partial<this>;
  }
}

export default V1EventSeriesModel;
