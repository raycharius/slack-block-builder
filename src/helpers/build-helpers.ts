import { Builder } from '../lib';
import {
  PlainTextObject,
  MarkdownObject,
  FilterObject,
  FilterParams,
  DispatchActionsConfigurationObject,
} from '../objects';

import type { ObjectLiteral, ContextElement } from '../types';

const defaultParams = {
  isMarkdown: false,
};

const isUndefined = (value: unknown): boolean => value === undefined;

const areUndefined = (...values): boolean => values
  .filter((value) => isUndefined(value)).length === values.length;

export function getBuilderResult<T>(builder: Builder, params: ObjectLiteral = defaultParams): T {
  return isUndefined(builder) ? undefined : builder.build(params);
}

export function getBuilderResults<T>(
  builders: Builder[], params: ObjectLiteral = defaultParams,
): T[] {
  return areUndefined(builders) ? undefined : builders
    .map((builder) => getBuilderResult<T>(builder, params));
}

export function getPlainTextObject(text: string): PlainTextObject | undefined {
  return isUndefined(text) ? undefined : new PlainTextObject(text);
}

export function getMarkdownObject(text: string): MarkdownObject | undefined {
  return isUndefined(text) ? undefined : new MarkdownObject(text);
}

export function getElementsForContext(
  elements: ContextElement[],
): Array<MarkdownObject | ObjectLiteral> | undefined {
  return isUndefined(elements)
    ? undefined
    : elements.map((element) => (typeof element === 'string'
      ? getMarkdownObject(element)
      : element.build()));
}

export function getFields(fields: string[]): MarkdownObject[] {
  return isUndefined(fields)
    ? undefined
    : fields.map((field) => getMarkdownObject(field));
}

export function getFormattedDate(date: Date): string {
  return isUndefined(date)
    ? undefined
    : date.toISOString().split('T')[0];
}

export function getFilter(params: FilterParams): FilterObject {
  const { filter, excludeBotUsers, excludeExternalSharedChannels } = params;

  if (areUndefined(filter, excludeBotUsers, excludeExternalSharedChannels)) {
    return undefined;
  }

  return new FilterObject({ filter, excludeBotUsers, excludeExternalSharedChannels });
}

export function getDispatchActionsConfigurationObject(
  params: ObjectLiteral,
): DispatchActionsConfigurationObject {
  const { onEnterPressed, onCharacterEntered } = params;

  if (areUndefined(onEnterPressed, onCharacterEntered)) {
    return undefined;
  }

  return new DispatchActionsConfigurationObject([onEnterPressed, onCharacterEntered]
    .filter(Boolean));
}
