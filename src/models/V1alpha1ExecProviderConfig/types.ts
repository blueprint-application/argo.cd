export interface V1alpha1ExecProviderConfigModelOptions {
  apiVersion?: string;
  args?: Array<string>;
  command?: string;
  env?: { [key: string]: string };
  installHint?: string;
}
