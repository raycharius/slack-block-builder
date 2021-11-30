import { Blocks } from '../blocks';
import { Elements } from '../elements';
import { ComponentUIText } from '../internal/constants';

import type { AccordionStateManager, AccordionState } from '../internal/lib';
import type {
  BlockBuilderReturnableFn,
  BlockBuilder,
  StringReturnableFn,
  Nullable,
} from '../internal/types';

export interface AccordionActionIdParams {
  expandedItems: AccordionState;
}

export type AccordionActionIdFn = StringReturnableFn<AccordionActionIdParams>;
export type AccordionTitleTextFn<T> = StringReturnableFn<{ item: T }>;
export type AccordionBuilderFn<T> = BlockBuilderReturnableFn<{ item: T }>;

export interface AccordionUIComponentParams<T> {
  items: T[];
  paginator: AccordionStateManager;
  expandButtonText: Nullable<string>;
  collapseButtonText: Nullable<string>;
  titleTextFunction: AccordionTitleTextFn<T>;
  actionIdFunction: AccordionActionIdFn;
  builderFunction: AccordionBuilderFn<T>;
}

export class AccordionUIComponent<T> {
  private readonly items: T[];

  private readonly paginator: AccordionStateManager;

  private readonly expandButtonText: string;

  private readonly collapseButtonText: string;

  private readonly titleTextFunction: AccordionTitleTextFn<T>;

  private readonly actionIdFunction: AccordionActionIdFn;

  private readonly builderFunction: AccordionBuilderFn<T>;

  constructor(params: AccordionUIComponentParams<T>) {
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
