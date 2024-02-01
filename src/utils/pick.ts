// eslint-disable-next-line @typescript-eslint/ban-types
export const pick = <T extends object = object, K extends keyof T = keyof T>(obj: T, fields: K[]): Partial<T> =>
  fields.reduce<Partial<T>>((acc, curr) => {
    if (Object.hasOwnProperty.call(obj, curr)) {
      acc[curr] = obj[curr as K];
    }
    return acc;
  }, {});
