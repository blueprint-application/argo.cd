export interface V1alpha1ApplicationSetTemplateMetaModelOptions {
  annotations?: { [key: string]: string };
  finalizers?: Array<string>;
  labels?: { [key: string]: string };
  name?: string;
  namespace?: string;
}
