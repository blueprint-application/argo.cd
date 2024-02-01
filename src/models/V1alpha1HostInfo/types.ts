import { V1NodeSystemInfoModelOptions as V1NodeSystemInfo } from '../V1NodeSystemInfo';
import { V1alpha1HostResourceInfoModelOptions as V1alpha1HostResourceInfo } from '../V1alpha1HostResourceInfo';

export interface V1alpha1HostInfoModelOptions {
  name?: string;
  resourcesInfo?: Array<V1alpha1HostResourceInfo>;
  systemInfo?: V1NodeSystemInfo;
}
