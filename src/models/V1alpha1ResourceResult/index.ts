import { BaseModel } from '../types';
import type { V1alpha1ResourceResultModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ResourceResultModel extends BaseModel {
  group?: string;
  // HookPhase contains the state of any operation associated with this resource OR hook This can also contain values for non-hook resources.
  hookPhase?: string;
  hookType?: string;
  kind?: string;
  message?: string;
  name?: string;
  namespace?: string;
  status?: string;
  syncPhase?: string;
  version?: string;

  constructor(data: V1alpha1ResourceResultModelOptions) {
    super();
    validate(data);
    this.group = data.group;
    this.hookPhase = data.hookPhase;
    this.hookType = data.hookType;
    this.kind = data.kind;
    this.message = data.message;
    this.name = data.name;
    this.namespace = data.namespace;
    this.status = data.status;
    this.syncPhase = data.syncPhase;
    this.version = data.version;
  }

  static create(data: V1alpha1ResourceResultModelOptions): V1alpha1ResourceResultModel {
    return new V1alpha1ResourceResultModel(data);
  }

  toObject(): Partial<this> {
    return {
      group: this.group,
      hookPhase: this.hookPhase,
      hookType: this.hookType,
      kind: this.kind,
      message: this.message,
      name: this.name,
      namespace: this.namespace,
      status: this.status,
      syncPhase: this.syncPhase,
      version: this.version,
    } as Partial<this>;
  }
}

export default V1alpha1ResourceResultModel;
