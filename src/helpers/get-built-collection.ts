import { getBuilderResults } from './build-helpers';

import type { Builder, SlackDto } from '../lib';
import type { OneOrArray } from '../types';

export function getBuiltCollection<Type extends Builder, Dto extends SlackDto>(
  ...builders: Array<OneOrArray<Type>>
): Dto[] {
  const prunedBuilders = builders.flat().filter(Boolean);

  return prunedBuilders.length === 0
    ? []
    : getBuilderResults(prunedBuilders);
}
