import { V1FieldsV1ModelOptions as V1FieldsV1 } from '../V1FieldsV1';

export interface V1ManagedFieldsEntryModelOptions {
  apiVersion?: string;
  fieldsType?: string;
  fieldsV1?: V1FieldsV1;
  manager?: string;
  operation?: string;
  subresource?: string;
  time?: Date;
}
