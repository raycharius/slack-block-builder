export interface ObjectLiteral {
  [key: string]: any;
}

export type Constructor<T = Record<string, unknown>> = new (...args: any[]) => T;

export type AbstractConstructor<T> = { prototype: T };
