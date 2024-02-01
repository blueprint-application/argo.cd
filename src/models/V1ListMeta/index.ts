import { BaseModel } from '../types';
import type { V1ListMetaModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1ListMetaModel extends BaseModel {
  // continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.
  _continue?: string;
  remainingItemCount?: string;
  resourceVersion?: string;
  selfLink?: string;

  constructor(data: V1ListMetaModelOptions) {
    super();
    validate(data);
    this._continue = data._continue;
    this.remainingItemCount = data.remainingItemCount;
    this.resourceVersion = data.resourceVersion;
    this.selfLink = data.selfLink;
  }

  static create(data: V1ListMetaModelOptions): V1ListMetaModel {
    return new V1ListMetaModel(data);
  }

  toObject(): Partial<this> {
    return {
      _continue: this._continue,
      remainingItemCount: this.remainingItemCount,
      resourceVersion: this.resourceVersion,
      selfLink: this.selfLink,
    } as Partial<this>;
  }
}

export default V1ListMetaModel;
