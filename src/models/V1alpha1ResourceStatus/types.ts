import { V1alpha1HealthStatusModelOptions as V1alpha1HealthStatus } from '../V1alpha1HealthStatus';

export interface V1alpha1ResourceStatusModelOptions {
  group?: string;
  health?: V1alpha1HealthStatus;
  hook?: boolean;
  kind?: string;
  name?: string;
  namespace?: string;
  requiresPruning?: boolean;
  status?: string;
  syncWave?: string;
  version?: string;
}
