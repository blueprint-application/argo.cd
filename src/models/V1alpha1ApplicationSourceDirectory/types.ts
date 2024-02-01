import { V1alpha1ApplicationSourceJsonnetModelOptions as V1alpha1ApplicationSourceJsonnet } from '../V1alpha1ApplicationSourceJsonnet';

export interface V1alpha1ApplicationSourceDirectoryModelOptions {
  exclude?: string;
  include?: string;
  jsonnet?: V1alpha1ApplicationSourceJsonnet;
  recurse?: boolean;
}
