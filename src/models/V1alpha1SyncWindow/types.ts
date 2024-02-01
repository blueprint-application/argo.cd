export interface V1alpha1SyncWindowModelOptions {
  applications?: Array<string>;
  clusters?: Array<string>;
  duration?: string;
  kind?: string;
  manualSync?: boolean;
  namespaces?: Array<string>;
  schedule?: string;
  timeZone?: string;
}
