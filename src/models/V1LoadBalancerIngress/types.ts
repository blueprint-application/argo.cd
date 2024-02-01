import { V1PortStatusModelOptions as V1PortStatus } from '../V1PortStatus';

export interface V1LoadBalancerIngressModelOptions {
  hostname?: string;
  ip?: string;
  ports?: Array<V1PortStatus>;
}
