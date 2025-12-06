import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../internal/helpers';
import {
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialOption,
  MinQueryLength,
  Placeholder,
} from '../internal/methods';

import type { SlackDto } from '../internal/dto';
import type { ConfirmationDialogBuilder } from '../bits';

export interface ExternalSelectParams {
  actionId?: string;
  minQueryLength?: number;
  placeholder?: string;
}

export interface ExternalSelectBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  FocusOnLoad,
  InitialOption,
  MinQueryLength,
  Placeholder {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/select-menu-element#external_select
 * @@displayName External Select
 */

export class ExternalSelectBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
    return this.getResult(SlackElementDto, {
      type: ElementType.ExternalSelect,
      placeholder: getPlainTextObject(this.props.placeholder),
      initialOption: getBuilderResult<SlackDto>(this.props.initialOption),
      confirm: getBuilderResult<SlackDto>(this.props.confirm),
    });
  }
}

applyMixins(ExternalSelectBuilder, [
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialOption,
  MinQueryLength,
  Placeholder,
]);
