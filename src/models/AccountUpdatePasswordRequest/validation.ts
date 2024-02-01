import { JSONSchema7 } from 'json-schema';
import { AccountUpdatePasswordRequestSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = AccountUpdatePasswordRequestSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
