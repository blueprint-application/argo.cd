import { JSONSchema7 } from 'json-schema';
import { StreamResultOfV1alpha1ApplicationTreeSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = StreamResultOfV1alpha1ApplicationTreeSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
