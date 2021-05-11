import { ElementBuilder } from '../base';
import { ElementSlackDto } from '../lib';
import {
  ActionId,
  Confirm,
  End,
  InitialOption,
  MinQueryLength,
  Placeholder,
  Build,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../helpers';
import { ElementType } from '../constants';

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface ExternalSelectParams {
  actionId?: string;
  minQueryLength?: number;
  placeholder?: string;
}

export interface ExternalSelectBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  InitialOption,
  MinQueryLength,
  Placeholder,
  Build {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#external_select
 * @@displayName External Select
 */

export class ExternalSelectBuilder extends ElementBuilder<ExternalSelectParams> {
  /** @internal */

  public build(): ElementSlackDto {
    return this.getResult(ElementSlackDto, {
      type: ElementType.ExternalSelect,
      placeholder: getPlainTextObject(this.props.placeholder),
      initialOption: getBuilderResult(this.props.initialOption),
      confirm: getBuilderResult(this.props.confirm),
    });
  }
}

applyMixins(ExternalSelectBuilder, [
  ActionId,
  Confirm,
  End,
  InitialOption,
  MinQueryLength,
  Placeholder,
]);
