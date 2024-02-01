import { JSONSchema7 } from 'json-schema';
import { IntstrIntOrStringSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IntstrIntOrStringSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
