import { Builder } from '../lib';

import type { SlackDto } from '../dto';
import type { Appendable } from '../types';

export type Collection<T> = T[];

export function getBuiltCollection<T extends Builder, Dto extends SlackDto>(
  ...builders: Appendable<T>
): Collection<Dto> {
  return Builder.pruneUndefinedFromArray(builders.flat())
    .map((builder) => builder.build());
}
