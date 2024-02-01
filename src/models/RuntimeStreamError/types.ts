import { ProtobufAnyModelOptions as ProtobufAny } from '../ProtobufAny';

export interface RuntimeStreamErrorModelOptions {
  details?: Array<ProtobufAny>;
  grpcCode?: number;
  httpCode?: number;
  httpStatus?: string;
  message?: string;
}
