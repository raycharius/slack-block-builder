/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import type { Ctor, AbstractCtor } from '../types';

export function applyMixins(derivedCtor: Ctor<any>, baseCtors: AbstractCtor<any>[]) {
  const { constructor } = derivedCtor.prototype;

  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      const descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);

      Object.defineProperty(
        derivedCtor.prototype, name, <PropertyDescriptor & ThisType<any>>descriptor,
      );
    });
  });

  derivedCtor.prototype.constructor = constructor; // eslint-disable-line no-param-reassign
}
