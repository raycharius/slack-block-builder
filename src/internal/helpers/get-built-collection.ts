import type { Builder } from '../lib/builder';
import type { SlackDto } from '../dto/slack-dto';
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
