import AJV from 'ajv';
import { JSONSchema7 } from 'json-schema';
import * as _ from 'lodash';
export * from './checks';
export { merge as deepMerge, merge } from './merge';
export { pick } from './pick';

export const addSchemas = (ajv: AJV, relations: { schema: JSONSchema7; ref: string }[], debug: string) => {
  const uniq = _.uniqBy(relations, 'ref');
  _.forEach(uniq, ({ schema, ref }) => {
    try {
      ajv.addSchema(schema, ref);
    } catch (e) {
      console.error(e);
      console.error({ uniq, ref, schema });
    }
  });
};
