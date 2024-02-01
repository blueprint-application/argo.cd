import { JSONSchema7 } from 'json-schema';
import { SessionGetUserInfoResponseSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = SessionGetUserInfoResponseSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
