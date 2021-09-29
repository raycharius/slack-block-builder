/* eslint-disable @typescript-eslint/no-explicit-any */

import type { BlockBuilder } from './builder-union-types';

export interface ObjectLiteral {
  [key: string]: any;
}

export type Ctor<T = Record<string, unknown>> = new (...args: any[]) => T;

export type AbstractCtor<T> = { prototype: T };

export type Undefinable<T> = T | undefined;

export type UndefinableArray<T> = Undefinable<T>[];

export type Appendable<T> = UndefinableArray<T | UndefinableArray<T>>;

export type Callback<T, R> = (params: T) => R;

export type BlockBuilderReturnableFn<T> = Callback<T, BlockBuilder[]>;

export type StringReturnableFn<T> = Callback<T, string>;
