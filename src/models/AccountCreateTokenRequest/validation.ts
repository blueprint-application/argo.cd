import { JSONSchema7 } from 'json-schema';
import { AccountCreateTokenRequestSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = AccountCreateTokenRequestSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
