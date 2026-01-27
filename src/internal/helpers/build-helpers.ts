import { Builder } from '../lib';
import {
  PlainTextObject,
  MarkdownObject,
  FilterObject,
  FilterParams,
  DispatchActionsConfigurationObject,
} from '../objects';

import type {
  ObjectLiteral,
  ContextElement,
  Undefinable,
} from '../types';
import type { SlackElementDto } from '../dto';

const defaultParams = {
  isMarkdown: false,
};

const valueOrUndefined = <T>(value: T): Undefinable<T> => (value === undefined ? undefined : value);

const valuesOrUndefined = <T extends unknown[]>(values: T): Undefinable<T> => {
  if (values.filter((value) => value !== undefined).length === 0) {
    return undefined;
  }

  return values;
};

export function getBuilderResult<T>(builder: Builder, params: ObjectLiteral = defaultParams): T {
  return valueOrUndefined(builder) && builder.build(params);
}

export function getBuilderResults<T>(
  builders: Builder[], params: ObjectLiteral = defaultParams,
): Undefinable<T[]> {
  return valueOrUndefined(builders) && builders
    .map((builder) => getBuilderResult<T>(builder, params));
}

export function getPlainTextObject(text: string): Undefinable<PlainTextObject> {
  if (text !== undefined && typeof text !== 'string') {
    throw new Error(`Text must be a string, but found ${typeof text}. If you are trying to pass a Rich Text block, please note that it is not supported in this field.`);
  }

  return valueOrUndefined(text) ? new PlainTextObject(text) : undefined;
}

export function getStringFromNumber(value: number): Undefinable<string> {
  return valueOrUndefined(value) ? value.toString() : undefined;
}

export function getMarkdownObject(text: string): Undefinable<MarkdownObject> {
  if (text !== undefined && typeof text !== 'string') {
    throw new Error(`Text must be a string, but found ${typeof text}. If you are trying to pass a Rich Text block, please note that it is not supported in this field.`);
  }

  return valueOrUndefined(text) ? new MarkdownObject(text) : undefined;
}

export function getElementsForContext(
  elements: ContextElement[],
): Undefinable<Array<MarkdownObject | Readonly<SlackElementDto>>> {
  return valueOrUndefined(elements) && elements.map((element) => (typeof element === 'string'
    ? new MarkdownObject(element)
    : element.build()));
}

export function getFields(fields: string[]): Undefinable<MarkdownObject[]> {
  return valueOrUndefined(fields) && fields.map((field) => new MarkdownObject(field));
}

export function getFormattedDate(date: Date): Undefinable<string> {
  return valueOrUndefined(date) && date.toISOString().split('T')[0];
}

export function getDateTimeIntegerFromDate(date: Date): Undefinable<number> {
  return valueOrUndefined(date) && Math.floor(date.getTime() / 1000);
}

export function getFilter(
  { filter, excludeBotUsers, excludeExternalSharedChannels }: FilterParams,
): Undefinable<FilterObject> {
  return valuesOrUndefined([filter, excludeBotUsers, excludeExternalSharedChannels])
    && new FilterObject({ filter, excludeBotUsers, excludeExternalSharedChannels });
}

export function getDispatchActionsConfigurationObject(
  { onEnterPressed, onCharacterEntered }: ObjectLiteral,
): Undefinable<DispatchActionsConfigurationObject> {
  return valuesOrUndefined([onEnterPressed, onCharacterEntered])
    && new DispatchActionsConfigurationObject([onEnterPressed, onCharacterEntered]
      .filter(Boolean));
}
