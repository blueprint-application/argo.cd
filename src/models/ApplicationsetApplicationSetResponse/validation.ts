import { JSONSchema7 } from 'json-schema';
import { ApplicationsetApplicationSetResponseSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = ApplicationsetApplicationSetResponseSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
