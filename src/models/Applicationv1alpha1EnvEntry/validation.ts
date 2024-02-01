import { JSONSchema7 } from 'json-schema';
import { Applicationv1alpha1EnvEntrySchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = Applicationv1alpha1EnvEntrySchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
