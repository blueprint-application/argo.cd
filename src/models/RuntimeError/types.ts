import { ProtobufAnyModelOptions as ProtobufAny } from '../ProtobufAny';

export interface RuntimeErrorModelOptions {
  code?: number;
  details?: Array<ProtobufAny>;
  error?: string;
  message?: string;
}
