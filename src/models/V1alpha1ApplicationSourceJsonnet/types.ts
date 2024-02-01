import { V1alpha1JsonnetVarModelOptions as V1alpha1JsonnetVar } from '../V1alpha1JsonnetVar';

export interface V1alpha1ApplicationSourceJsonnetModelOptions {
  extVars?: Array<V1alpha1JsonnetVar>;
  libs?: Array<string>;
  tlas?: Array<V1alpha1JsonnetVar>;
}
