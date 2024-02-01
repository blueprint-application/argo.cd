import { JSONSchema7 } from 'json-schema';
import { ApplicationApplicationSyncRequestSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = ApplicationApplicationSyncRequestSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
