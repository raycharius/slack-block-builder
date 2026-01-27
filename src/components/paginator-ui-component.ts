import { Blocks } from '../blocks';
import { Elements } from '../elements';
import { ComponentUIText, PaginatorButtonId } from '../internal/constants';
import { Builder, PaginatorStateManager, PaginatorState } from '../internal/lib';

import type {
  BlockBuilder,
  BlockBuilderReturnableFn,
  StringReturnableFn,
  Nullable,
} from '../internal/types';

export type PaginatorActionIdFn =
  StringReturnableFn<PaginatorState & { buttonId: PaginatorButtonId }>;

export interface PageCountTextFnParams {
  page: number;
  totalPages: number;
}

export type PaginatorPageCountTextFn = (params: PageCountTextFnParams) => string;
export type PaginatorBuilderFn<T> = BlockBuilderReturnableFn<{ item: T }>;

interface PaginatorUIComponentParams<T> {
  items: T[];
  paginator: PaginatorStateManager;
  nextButtonText: Nullable<string>;
  previousButtonText: Nullable<string>;
  pageCountTextFunction: Nullable<PaginatorPageCountTextFn>;
  actionIdFunction: PaginatorActionIdFn;
  builderFunction: PaginatorBuilderFn<T>;
}

const defaultPageCountText = ({ page, totalPages }: PageCountTextFnParams) => `Page ${page} of ${totalPages}`;

export class PaginatorUIComponent<T> {
  private readonly items: T[];

  private readonly paginator: PaginatorStateManager;

  private readonly nextButtonText: string;

  private readonly previousButtonText: string;

  private readonly pageCountTextFunction: PaginatorPageCountTextFn;

  private readonly actionIdFunction: PaginatorActionIdFn;

  private readonly builderFunction: PaginatorBuilderFn<T>;

  constructor(params: PaginatorUIComponentParams<T>) {
    this.items = params.items;
    this.paginator = params.paginator;
    this.nextButtonText = params.nextButtonText || ComponentUIText.Next;
    this.previousButtonText = params.previousButtonText || ComponentUIText.Previous;
    this.pageCountTextFunction = params.pageCountTextFunction || defaultPageCountText;
    this.actionIdFunction = params.actionIdFunction;
    this.builderFunction = params.builderFunction;
  }

  public getBlocks(): BlockBuilder[] {
    const blocksForEach = [];

    for (let i = 0; i < this.paginator.getTotalItems() && i < this.items.length; i += 1) {
      blocksForEach.push(this.builderFunction({ item: this.items[i] }).flat());
    }

    const actionButtons = [];

    if (this.paginator.getPage() > 1) {
      actionButtons.push(Elements.Button({
        text: this.previousButtonText,
        actionId: this.actionIdFunction({
          buttonId: PaginatorButtonId.Previous,
          ...this.paginator.getPreviousPageState(),
        }),
      }));
    }

    if (this.paginator.getPage() < this.paginator.getTotalPages()) {
      actionButtons.push(Elements.Button({
        text: this.nextButtonText,
        actionId: this.actionIdFunction({
          buttonId: PaginatorButtonId.Next,
          ...this.paginator.getNextPageState(),
        }),
      }));
    }

    const unpruned = this.paginator.getTotalPages() > 1
      ? [
        ...blocksForEach.flat(),
        Blocks.Context().elements(this.pageCountTextFunction({
          page: this.paginator.getPage(),
          totalPages: this.paginator.getTotalPages(),
        })),
        Blocks.Divider(),
        Blocks.Actions().elements(...actionButtons),
      ]
      : blocksForEach.flat();

    return Builder.pruneUndefinedFromArray(unpruned);
  }
}
