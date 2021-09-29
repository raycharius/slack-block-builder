import { PaginatorUIComponent, PaginatorUIComponentParams } from './paginator';
import { AccordionUIComponent, AccordionUIComponentParams } from './accordion';
import {
  PaginationCalculator,
  PaginationCalculatorParams,
  AccordionStateManager,
  AccordionStateManagerParams,
} from '../lib';

export type { PaginatorUIComponent };
export type { AccordionUIComponent };

export type PaginatorParams<T> = PaginationCalculatorParams &
Omit<PaginatorUIComponentParams<T>, 'paginator'>;

export function Paginator<T>(params: PaginatorParams<T>): PaginatorUIComponent<T> {
  const { page, perPage, totalItems } = params;
  const paginationCalculator = new PaginationCalculator({ page, perPage, totalItems });

  return new PaginatorUIComponent<T>({
    paginator: paginationCalculator,
    items: params.items,
    nextButtonText: params.nextButtonText || null,
    previousButtonText: params.previousButtonText || null,
    pageCountText: params.pageCountText || null,
    actionId: params.actionId,
  });
}

export type EasyPaginatorParams<T> = Omit<PaginatorParams<T>, 'totalItems'>;

export function EasyPaginator<T>(params: EasyPaginatorParams<T>): PaginatorUIComponent<T> {
  const { page, perPage, items } = params;
  const totalItems = items.length;
  const paginationCalculator = new PaginationCalculator({ page, perPage, totalItems });
  const extractedItems = paginationCalculator.extractItems(items);

  return new PaginatorUIComponent<T>({
    paginator: paginationCalculator,
    items: extractedItems,
    nextButtonText: params.nextButtonText || null,
    previousButtonText: params.previousButtonText || null,
    pageCountText: params.pageCountText || null,
    actionId: params.actionId,
  });
}

export type AccordionParams<T> = Omit<AccordionUIComponentParams<T>, 'stateManager'>
& Omit<AccordionStateManagerParams, 'totalItems'>;

export function Accordion<T>(params: AccordionParams<T>): AccordionUIComponent<T> {
  const { items, collapseOnExpand, state } = params;
  const totalItems = items.length;
  const stateManager = new AccordionStateManager({ state, collapseOnExpand, totalItems });

  return new AccordionUIComponent<T>({
    items,
    stateManager,
    expandButtonText: params.expandButtonText || null,
    collapseButtonText: params.collapseButtonText || null,
    titleText: params.titleText,
    actionId: params.actionId,
  });
}

const components = {
  Paginator,
  EasyPaginator,
  Accordion,
};

export { components as Components };
