import { ObjectType } from '../constants/object-types';

export interface TextAttributesBase {
  type: ObjectType.Markdown | ObjectType.Text;
}

export interface MarkdownTextAttributes extends TextAttributesBase {
  type: ObjectType.Markdown;
  verbatim?: boolean;
}

export interface PlainTextAttributes extends TextAttributesBase {
  type: ObjectType.Text;
  emoji?: boolean;
}

export type TextAttributesType = PlainTextAttributes | MarkdownTextAttributes;
