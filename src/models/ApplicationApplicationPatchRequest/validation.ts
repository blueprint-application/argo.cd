import { JSONSchema7 } from 'json-schema';
import { ApplicationApplicationPatchRequestSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = ApplicationApplicationPatchRequestSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
