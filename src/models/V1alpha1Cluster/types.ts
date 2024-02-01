import { V1alpha1ClusterConfigModelOptions as V1alpha1ClusterConfig } from '../V1alpha1ClusterConfig';
import { V1alpha1ClusterInfoModelOptions as V1alpha1ClusterInfo } from '../V1alpha1ClusterInfo';
import { V1alpha1ConnectionStateModelOptions as V1alpha1ConnectionState } from '../V1alpha1ConnectionState';

export interface V1alpha1ClusterModelOptions {
  annotations?: { [key: string]: string };
  clusterResources?: boolean;
  config?: V1alpha1ClusterConfig;
  connectionState?: V1alpha1ConnectionState;
  info?: V1alpha1ClusterInfo;
  labels?: { [key: string]: string };
  name?: string;
  namespaces?: Array<string>;
  project?: string;
  refreshRequestedAt?: Date;
  server?: string;
  serverVersion?: string;
  shard?: string;
}
