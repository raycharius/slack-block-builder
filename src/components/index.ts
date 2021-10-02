import {
  PaginatorUIBuilder,
  PaginatorPageCountTextFn,
  PaginatorActionIdFn,
  PaginatorBuilderFn,
} from './paginator-ui-builder';
import {
  AccordionUIBuilder,
  AccordionTitleTextFn,
  AccordionActionIdFn,
} from './accordion-ui-builder';
import {
  PaginatorStateManager,
  PaginatorStateManagerParams,
  AccordionStateManager,
  AccordionStateManagerParams,
} from '../lib';

import type { BlockBuilder } from '../types';

interface PaginatorBaseParams<T> {
  items: T[];
  nextButtonText?: string;
  previousButtonText?: string;
  pageCountText?: PaginatorPageCountTextFn;
  actionId: PaginatorActionIdFn;
  blocksForEach: PaginatorBuilderFn<T>,
}

export type PaginatorParams<T> = PaginatorBaseParams<T> & PaginatorStateManagerParams;

export function Paginator<T>(params: PaginatorParams<T>): BlockBuilder[] {
  const { page, perPage, totalItems } = params;
  const stateManager = new PaginatorStateManager({ page, perPage, totalItems });
  const paginator = new PaginatorUIBuilder<T>({
    items: params.items,
    paginator: stateManager,
    nextButtonText: params.nextButtonText || null,
    previousButtonText: params.previousButtonText || null,
    pageCountTextFunction: params.pageCountText || null,
    actionIdFunction: params.actionId,
    builderFunction: params.blocksForEach,
  });

  return paginator.getBlocks();
}

export type EasyPaginatorParams<T> = Omit<PaginatorParams<T>, 'totalItems'>;

export function EasyPaginator<T>(params: EasyPaginatorParams<T>): BlockBuilder[] {
  const { page, perPage, items } = params;
  const totalItems = items.length;
  const paginationCalculator = new PaginatorStateManager({ page, perPage, totalItems });
  const extractedItems = paginationCalculator.extractItems(items);
  const paginator = new PaginatorUIBuilder<T>({
    paginator: paginationCalculator,
    items: extractedItems,
    nextButtonText: params.nextButtonText || null,
    previousButtonText: params.previousButtonText || null,
    pageCountTextFunction: params.pageCountText || null,
    actionIdFunction: params.actionId,
    builderFunction: params.blocksForEach,
  });

  return paginator.getBlocks();
}

interface AccordionBaseParams<T> {
  items: T[];
  expandButtonText?: string;
  collapseButtonText?: string;
  titleText?: AccordionTitleTextFn<T>;
  actionId: AccordionActionIdFn;
  blocksForExpanded: PaginatorBuilderFn<T>,
}

export type AccordionParams<T> = AccordionBaseParams<T> & AccordionStateManagerParams;

export function Accordion<T>(params: AccordionParams<T>): BlockBuilder[] {
  const { items, expandedItems, collapseOnExpand } = params;
  const stateManager = new AccordionStateManager({ expandedItems, collapseOnExpand });
  const accordion = new AccordionUIBuilder<T>({
    items,
    paginator: stateManager,
    expandButtonText: params.expandButtonText || null,
    collapseButtonText: params.collapseButtonText || null,
    titleTextFunction: params.titleText || null,
    actionIdFunction: params.actionId,
    builderFunction: params.blocksForExpanded,
  });

  return accordion.getBlocks();
}

const components = {
  Paginator,
  EasyPaginator,
  Accordion,
};

export { components as Components };
