import { JSONSchema7 } from 'json-schema';
import { SessionSessionResponseSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = SessionSessionResponseSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
