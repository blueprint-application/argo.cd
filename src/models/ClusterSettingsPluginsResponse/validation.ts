import { JSONSchema7 } from 'json-schema';
import { ClusterSettingsPluginsResponseSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = ClusterSettingsPluginsResponseSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
