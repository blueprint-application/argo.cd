import { JSONSchema7 } from 'json-schema';
import { ApplicationLinkInfoSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = ApplicationLinkInfoSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
