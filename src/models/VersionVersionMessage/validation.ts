import { JSONSchema7 } from 'json-schema';
import { VersionVersionMessageSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = VersionVersionMessageSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
