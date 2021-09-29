import { Blocks } from '../blocks';
import { Elements } from '../elements';
import { ComponentUIText } from '../constants';

import type { StringReturnableFn, BlockBuilderReturnableFn, BlockBuilder } from '../types';
import type { PaginationCalculator } from '../lib';

export interface PaginatorActionIdParams<T> {
  page: number,
  totalItems: number,
  perPage: number,
  offset: number;
  totalPages: number,
  cursor: T,
}

export type PaginatorActionIdFn<T> = StringReturnableFn<PaginatorActionIdParams<T>>;

export interface PageCountTextFnParams {
  page: number;
  totalPages: number;
}

export type PageCountTextFn = (params: PageCountTextFnParams) => string;

export interface PaginatorUIComponentParams<T> {
  items: T[];
  paginator: PaginationCalculator;
  nextButtonText?: string;
  previousButtonText?: string;
  pageCountText?: PageCountTextFn;
  actionId: PaginatorActionIdFn<T>;
}

const defaultPageCountText = ({ page, totalPages }) => `Page ${page} of ${totalPages}`;

export class PaginatorUIComponent<T> {
  private readonly items: T[];

  private readonly paginator: PaginationCalculator;

  private readonly nextButtonText: string;

  private readonly previousButtonText: string;

  private readonly pageCountTextFunction: PageCountTextFn;

  private readonly actionIdFunction: PaginatorActionIdFn<T>;

  constructor(params: PaginatorUIComponentParams<T>) {
    this.items = params.items;
    this.paginator = params.paginator;
    this.nextButtonText = params.nextButtonText || ComponentUIText.Next;
    this.previousButtonText = params.previousButtonText || ComponentUIText.Previous;
    this.pageCountTextFunction = params.pageCountText || defaultPageCountText;
    this.actionIdFunction = params.actionId;
  }

  private getActionIdParams(offset: number): PaginatorActionIdParams<T> {
    const isMoveForward = offset < this.paginator.getOffset();

    return {
      offset,
      page: this.paginator.getPageByOffset(offset),
      totalItems: this.paginator.getTotalItems(),
      perPage: this.paginator.getPerPage(),
      totalPages: this.paginator.getTotalPages(),
      cursor: isMoveForward ? this.items[this.items.length - 1] : this.items[0],
    };
  }

  public blocksForEach(builderFn: BlockBuilderReturnableFn<T>): BlockBuilder[] {
    const blocksForEach = [];

    for (let i = 0; i < this.paginator.getTotalItems() && i < this.items.length; i += 1) {
      blocksForEach.push(builderFn(this.items[i]));
    }

    return this.paginator.getTotalPages() > 1
      ? [
        ...blocksForEach.flat(),
        Blocks.Context().elements(this.pageCountTextFunction({
          page: this.paginator.getPage(),
          totalPages: this.paginator.getTotalPages(),
        })),
        Blocks.Divider(),
        Blocks.Actions()
          .elements(
            Elements.Button({
              text: this.previousButtonText,
              actionId: this.actionIdFunction(
                this.getActionIdParams(this.paginator.getPreviousPageOffset()),
              ),
            }),
            Elements.Button({
              text: this.nextButtonText,
              actionId: this.actionIdFunction(
                this.getActionIdParams(this.paginator.getNextPageOffset()),
              ),
            }),
          ),
      ]
      : blocksForEach.flat();
  }
}
