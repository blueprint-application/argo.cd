import { V1alpha1ResourceActionParamModelOptions as V1alpha1ResourceActionParam } from '../V1alpha1ResourceActionParam';

export interface V1alpha1ResourceActionModelOptions {
  disabled?: boolean;
  displayName?: string;
  iconClass?: string;
  name?: string;
  params?: Array<V1alpha1ResourceActionParam>;
}
