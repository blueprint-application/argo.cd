import { V1FieldsV1ModelOptions as V1FieldsV1 } from '../V1FieldsV1';
import { BaseModel } from '../types';
import type { V1ManagedFieldsEntryModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1ManagedFieldsEntryModel extends BaseModel {
  // APIVersion defines the version of this resource that this field set applies to. The format is \"group/version\" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
  apiVersion?: string;
  fieldsType?: string;
  fieldsV1?: V1FieldsV1;
  // Manager is an identifier of the workflow managing these fields.
  manager?: string;
  // Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are \'Apply\' and \'Update\'.
  operation?: string;
  // Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
  subresource?: string;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal=false +protobuf.as=Timestamp +protobuf.options.(gogoproto.goproto_stringer)=false
  time?: Date;

  constructor(data: V1ManagedFieldsEntryModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.fieldsType = data.fieldsType;
    this.fieldsV1 = data.fieldsV1;
    this.manager = data.manager;
    this.operation = data.operation;
    this.subresource = data.subresource;
    this.time = data.time;
  }

  static create(data: V1ManagedFieldsEntryModelOptions): V1ManagedFieldsEntryModel {
    return new V1ManagedFieldsEntryModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      fieldsType: this.fieldsType,
      fieldsV1: this.fieldsV1,
      manager: this.manager,
      operation: this.operation,
      subresource: this.subresource,
      time: this.time,
    } as Partial<this>;
  }
}

export default V1ManagedFieldsEntryModel;
