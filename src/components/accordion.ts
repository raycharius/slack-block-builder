import { Blocks } from '../blocks';
import { Elements } from '../elements';
import { ComponentUIText } from '../constants';

import type { AccordionStateManager, State } from '../lib';
import type { BlockBuilderReturnableFn, BlockBuilder, StringReturnableFn } from '../types';

export type TitleTextFn<T> = StringReturnableFn<T>;

export interface AccordionActionIdParams {
  state: State;
}

export type AccordionActionIdFn = StringReturnableFn<AccordionActionIdParams>;

export interface AccordionUIComponentParams<T> {
  items: T[];
  stateManager: AccordionStateManager;
  expandButtonText?: string;
  collapseButtonText?: string;
  titleText: TitleTextFn<T>;
  actionId: AccordionActionIdFn;
}

export class AccordionUIComponent<T> {
  private readonly items: T[];

  private readonly stateManager: AccordionStateManager;

  private readonly expandButtonText: string;

  private readonly collapseButtonText: string;

  private readonly titleTextFunction: TitleTextFn<T>;

  private readonly actionIdFunction: AccordionActionIdFn;

  constructor(params: AccordionUIComponentParams<T>) {
    this.items = params.items;
    this.stateManager = params.stateManager;
    this.expandButtonText = params.expandButtonText || ComponentUIText.More;
    this.collapseButtonText = params.collapseButtonText || ComponentUIText.Close;
    this.titleTextFunction = params.titleText;
    this.actionIdFunction = params.actionId;
  }

  public blocksOnExpand(builderFn: BlockBuilderReturnableFn<T>): BlockBuilder[] {
    return this.items.map((item, index) => {
      const isExpanded = this.stateManager.checkItemIsExpandedByIndex(index);

      return [
        Blocks.Divider(),
        Blocks.Section({ text: this.titleTextFunction(item) })
          .accessory(Elements.Button({
            text: isExpanded ? this.collapseButtonText : this.expandButtonText,
            actionId: this.actionIdFunction({
              state: this.stateManager.getNextStateByItemIndex(index),
            }),
          })),
        ...isExpanded ? builderFn(item) : [],
      ];
    }).flat();
  }
}
