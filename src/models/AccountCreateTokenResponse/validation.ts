import { JSONSchema7 } from 'json-schema';
import { AccountCreateTokenResponseSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = AccountCreateTokenResponseSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
