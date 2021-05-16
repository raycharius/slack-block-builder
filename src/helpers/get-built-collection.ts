import { getBuilderResults } from './build-helpers';

import type { Builder, SlackDto } from '../lib';
import type { OneOrArray } from '../types';

export type Collection<T> = T[];

export function getBuiltCollection<T extends Builder, Dto extends SlackDto>(
  ...builders: Array<OneOrArray<T>>
): Collection<Dto> | [] {
  const prunedBuilders = builders.flat().filter(Boolean);

  return prunedBuilders.length === 0
    ? []
    : getBuilderResults<Dto>(prunedBuilders);
}
