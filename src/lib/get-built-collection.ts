import type { Builder } from './builder';
import type { SlackDto } from './slack-dto';
import type { Appendable } from '../types';

export type Collection<T> = T[];

export function getBuiltCollection<T extends Builder, Dto extends SlackDto>(
  ...builders: Appendable<T>
): Collection<Dto> {
  const prunedBuilders: T[] = builders.flat().filter(Boolean) as T[];

  return prunedBuilders.length === 0
    ? []
    : prunedBuilders.map((builder) => builder.build());
}
