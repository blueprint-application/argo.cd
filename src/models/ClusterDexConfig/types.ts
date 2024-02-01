import { ClusterConnectorModelOptions as ClusterConnector } from '../ClusterConnector';

export interface ClusterDexConfigModelOptions {
  connectors?: Array<ClusterConnector>;
}
