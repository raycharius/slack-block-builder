import type { Undefinable } from '../internal/types';

const falsyValues = [undefined, null, false] as unknown[];

const falsy = (value: unknown): boolean => falsyValues.includes(value);
const truthy = (value: unknown): boolean => !falsyValues.includes(value);

export function setIfTruthy<T, R>(condition: T, toSet: R): Undefinable<R> {
  return truthy(condition) ? toSet : undefined;
}

export function omitIfTruthy<T, R>(condition: T, toOmit: R): Undefinable<R> {
  return truthy(condition) ? undefined : toOmit;
}

export function setIfFalsy<T, R>(condition: T, toSet: R): Undefinable<R> {
  return falsy(condition) ? toSet : undefined;
}

export function omitIfFalsy<T, R>(condition: T, toOmit: R): Undefinable<R> {
  return falsy(condition) ? undefined : toOmit;
}

const conditionals = {
  setIfTruthy,
  omitIfTruthy,
  setIfFalsy,
  omitIfFalsy,
};

// Strange export. I know. For IDE highlighting purposes.

export { conditionals };
