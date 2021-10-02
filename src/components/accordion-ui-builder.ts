import { Blocks } from '../blocks';
import { Elements } from '../elements';
import { ComponentUIText } from '../constants';

import type { AccordionStateManager, AccordionState } from '../lib';
import type { BlockBuilderReturnableFn, BlockBuilder, StringReturnableFn } from '../types';

export interface AccordionActionIdParams {
  expandedItems: AccordionState;
}

export type AccordionActionIdFn = StringReturnableFn<AccordionActionIdParams>;
export type AccordionTitleTextFn<T> = StringReturnableFn<{ item: T }>;
export type AccordionBuilderFn<T> = BlockBuilderReturnableFn<{ item: T }>;

export interface AccordionUIBuilderParams<T> {
  items: T[];
  paginator: AccordionStateManager;
  expandButtonText?: string;
  collapseButtonText?: string;
  titleTextFunction: AccordionTitleTextFn<T>;
  actionIdFunction: AccordionActionIdFn;
  builderFunction: AccordionBuilderFn<T>;
}

export class AccordionUIBuilder<T> {
  private readonly items: T[];

  private readonly paginator: AccordionStateManager;

  private readonly expandButtonText: string;

  private readonly collapseButtonText: string;

  private readonly titleTextFunction: AccordionTitleTextFn<T>;

  private readonly actionIdFunction: AccordionActionIdFn;

  private readonly builderFunction: AccordionBuilderFn<T>;

  constructor(params: AccordionUIBuilderParams<T>) {
    this.items = params.items;
    this.paginator = params.paginator;
    this.expandButtonText = params.expandButtonText || ComponentUIText.More;
    this.collapseButtonText = params.collapseButtonText || ComponentUIText.Close;
    this.titleTextFunction = params.titleTextFunction;
    this.actionIdFunction = params.actionIdFunction;
    this.builderFunction = params.builderFunction;
  }

  public getBlocks(): BlockBuilder[] {
    return this.items.map((item, index) => {
      const isExpanded = this.paginator.checkItemIsExpandedByIndex(index);

      const blocks = [
        Blocks.Section({ text: this.titleTextFunction({ item }) })
          .accessory(Elements.Button({
            text: isExpanded ? this.collapseButtonText : this.expandButtonText,
            actionId: this.actionIdFunction({
              expandedItems: this.paginator.getNextStateByItemIndex(index),
            }),
          })),
        ...isExpanded ? this.builderFunction({ item }) : [],
      ];

      return index === 0 ? blocks : [Blocks.Divider(), ...blocks];
    }).flat();
  }
}
