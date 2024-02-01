import { JSONSchema7 } from 'json-schema';
import { V1alpha1AppProjectSpecSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = V1alpha1AppProjectSpecSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
