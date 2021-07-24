import { Builder } from '../lib';
import {
  PlainTextObject,
  MarkdownObject,
  FilterObject,
  FilterParams,
  DispatchActionsConfigurationObject,
} from '../objects';

import type { ObjectLiteral, ContextElement, Undefinable, UndefinableArray } from '../types';

const defaultParams = {
  isMarkdown: false,
};

const isUndefined = (value: unknown): boolean => value === undefined;

const areUndefined = (...values: unknown[]): boolean => values
  .filter((value) => isUndefined(value)).length === values.length;

export function getBuilderResult<T>(builder: Builder, params: ObjectLiteral = defaultParams): T {
  return isUndefined(builder) ? undefined : builder.build(params);
}

export function getBuilderResults<T>(
  builders: Builder[], params: ObjectLiteral = defaultParams,
): Undefinable<UndefinableArray<T>> {
  return areUndefined(builders) ? undefined : builders
    .map((builder) => getBuilderResult<T>(builder, params));
}

export function getPlainTextObject(text: string): Undefinable<PlainTextObject> {
  return isUndefined(text) ? undefined : new PlainTextObject(text);
}

export function getMarkdownObject(text: string): Undefinable<MarkdownObject> {
  return isUndefined(text) ? undefined : new MarkdownObject(text);
}

export function getElementsForContext(
  elements: ContextElement[],
): Undefinable<UndefinableArray<MarkdownObject | ObjectLiteral>> {
  return isUndefined(elements)
    ? undefined
    : elements.map((element) => (typeof element === 'string'
      ? getMarkdownObject(element)
      : element.build()));
}

export function getFields(fields: string[]): Undefinable<UndefinableArray<MarkdownObject>> {
  return isUndefined(fields)
    ? undefined
    : fields.map((field) => getMarkdownObject(field));
}

export function getFormattedDate(date: Date): Undefinable<string> {
  return isUndefined(date)
    ? undefined
    : date.toISOString().split('T')[0];
}

export function getFilter(params: FilterParams): Undefinable<FilterObject> {
  const { filter, excludeBotUsers, excludeExternalSharedChannels } = params;

  if (areUndefined(filter, excludeBotUsers, excludeExternalSharedChannels)) {
    return undefined;
  }

  return new FilterObject({ filter, excludeBotUsers, excludeExternalSharedChannels });
}

export function getDispatchActionsConfigurationObject(
  params: ObjectLiteral,
): Undefinable<DispatchActionsConfigurationObject> {
  const { onEnterPressed, onCharacterEntered } = params;

  if (areUndefined(onEnterPressed, onCharacterEntered)) {
    return undefined;
  }

  return new DispatchActionsConfigurationObject([onEnterPressed, onCharacterEntered]
    .filter(Boolean));
}
