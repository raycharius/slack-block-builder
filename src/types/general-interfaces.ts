/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ObjectLiteral {
  [key: string]: any;
}

export type Ctor<T = Record<string, unknown>> = new (...args: any[]) => T;

export type AbstractCtor<T> = { prototype: T };

export type Appendable<T> = Array<T | T[]>;

export type Undefinable<T> = T | undefined;

export type UndefinableArray<T> = Undefinable<T>[];
