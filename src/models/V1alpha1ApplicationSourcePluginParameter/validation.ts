import { JSONSchema7 } from 'json-schema';
import { V1alpha1ApplicationSourcePluginParameterSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = V1alpha1ApplicationSourcePluginParameterSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
