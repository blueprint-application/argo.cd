import { JSONSchema7 } from 'json-schema';
import { ProjectProjectTokenResponseSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = ProjectProjectTokenResponseSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
