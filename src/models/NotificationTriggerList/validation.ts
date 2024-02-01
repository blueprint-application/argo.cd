import { JSONSchema7 } from 'json-schema';
import { NotificationTriggerListSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = NotificationTriggerListSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
