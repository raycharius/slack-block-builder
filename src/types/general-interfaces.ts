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

export type Fn<T, R> = (arg: T) => R;

export type BlockBuilderReturnableFn<T> = Fn<T, BlockBuilder[]>;

export type StringReturnableFn<T> = Fn<T, string>;
