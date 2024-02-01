import { V1alpha1ClusterCacheInfoModelOptions as V1alpha1ClusterCacheInfo } from '../V1alpha1ClusterCacheInfo';
import { V1alpha1ConnectionStateModelOptions as V1alpha1ConnectionState } from '../V1alpha1ConnectionState';

export interface V1alpha1ClusterInfoModelOptions {
  apiVersions?: Array<string>;
  applicationsCount?: string;
  cacheInfo?: V1alpha1ClusterCacheInfo;
  connectionState?: V1alpha1ConnectionState;
  serverVersion?: string;
}
