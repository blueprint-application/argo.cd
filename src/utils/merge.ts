import { isArray, isObject } from './checks';

type Head<T> = T extends [infer I, ...infer _Rest] ? I : never;
type Tail<T> = T extends [infer _I, ...infer Rest] ? Rest : never;

type Zip_DeepMergeTwoTypes<T, U> = T extends []
  ? U
  : U extends []
  ? T
  : [DeepMergeTwoTypes<Head<T>, Head<U>>, ...Zip_DeepMergeTwoTypes<Tail<T>, Tail<U>>];

/**
 * Take two objects T and U and create the new one with uniq keys for T a U objectI
 * helper generic for `DeepMergeTwoTypes`
 */
type GetObjDifferentKeys<T, U, T0 = Omit<T, keyof U> & Omit<U, keyof T>, T1 = { [K in keyof T0]: T0[K] }> = T1;

/**
 * Take two objects T and U and create the new one with the same objects keys
 * helper generic for `DeepMergeTwoTypes`
 */
type GetObjSameKeys<T, U> = Omit<T | U, keyof GetObjDifferentKeys<T, U>>;

type TPreMerged<T, U> = Partial<GetObjDifferentKeys<T, U>> & {
  [K in keyof GetObjSameKeys<T, U>]: DeepMergeTwoTypes<T[K], U[K]>;
};

export type MergeTwoObjects<T, U, T1 = { [K in keyof TPreMerged<T, U>]: TPreMerged<T, U>[K] }> = T1;

export type DeepMergeTwoTypes<T, U> = [T, U] extends [any[], any[]]
  ? Zip_DeepMergeTwoTypes<T, U>
  : // check if generic types are objects
  [T, U] extends [{ [key: string]: unknown }, { [key: string]: unknown }]
  ? MergeTwoObjects<T, U>
  : T | U;

// eslint-disable-next-line @typescript-eslint/ban-types
export function merge<T extends object, U extends object>(target: T, source: U): MergeTwoObjects<T, U> {
  const merged = { ...target };

  for (const key in source) {
    if (Object.hasOwnProperty.call(source, key)) {
      if (isArray(source[key])) {
        const concatenated = isArray(merged[key as unknown as keyof T])
          ? Array.prototype.concat.call(merged[key as unknown as keyof T], source[key])
          : source[key];
        merged[key as unknown as keyof T] = concatenated as unknown as T[keyof T];
        continue;
      }

      if (isObject(source[key]) && isObject(target[key as unknown as keyof T])) {
        merged[key as unknown as keyof T] = merge(
          merged[key as unknown as keyof T] as unknown as T,
          // eslint-disable-next-line @typescript-eslint/ban-types
          source[key] as unknown as object,
        ) as unknown as any;
        continue;
      }

      merged[key as unknown as keyof T] = source[key] as unknown as any;
    }
  }

  return merged as MergeTwoObjects<T, U>;
}
