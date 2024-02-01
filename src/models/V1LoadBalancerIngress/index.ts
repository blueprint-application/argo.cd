import { V1PortStatusModelOptions as V1PortStatus } from '../V1PortStatus';
import { BaseModel } from '../types';
import type { V1LoadBalancerIngressModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1LoadBalancerIngressModel extends BaseModel {
  hostname?: string;
  ip?: string;
  ports?: Array<V1PortStatus>;

  constructor(data: V1LoadBalancerIngressModelOptions) {
    super();
    validate(data);
    this.hostname = data.hostname;
    this.ip = data.ip;
    this.ports = data.ports;
  }

  static create(data: V1LoadBalancerIngressModelOptions): V1LoadBalancerIngressModel {
    return new V1LoadBalancerIngressModel(data);
  }

  toObject(): Partial<this> {
    return {
      hostname: this.hostname,
      ip: this.ip,
      ports: this.ports,
    } as Partial<this>;
  }
}

export default V1LoadBalancerIngressModel;
