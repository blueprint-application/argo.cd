import { JSONSchema7 } from 'json-schema';
import { V1alpha1ApplicationSetStrategySchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = V1alpha1ApplicationSetStrategySchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
