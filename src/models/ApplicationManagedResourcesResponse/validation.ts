import { JSONSchema7 } from 'json-schema';
import { ApplicationManagedResourcesResponseSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = ApplicationManagedResourcesResponseSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
