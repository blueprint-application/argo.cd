export const isUndefined = (val: unknown): val is undefined => val === undefined;

export const isNull = (val: unknown): val is null => val === null;

export const isBoolean = (val: unknown): val is boolean => Boolean(val) === val;

export const isNumber = (val: unknown): val is number => typeof val === 'number';

export const isString = (val: unknown): val is string => typeof val === 'string';

export const isArray = (val: unknown): val is any[] => val instanceof Array;

// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (val: unknown): val is Function => val instanceof Function;

// eslint-disable-next-line @typescript-eslint/ban-types
export const isObject = (val: unknown): val is object => val instanceof Object && !isArray(val) && !isFunction(val);
