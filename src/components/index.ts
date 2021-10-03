import {
  PaginatorUIComponent,
  PaginatorPageCountTextFn,
  PaginatorActionIdFn,
  PaginatorBuilderFn,
} from './paginator-ui-component';
import {
  AccordionUIComponent,
  AccordionTitleTextFn,
  AccordionActionIdFn,
} from './accordion-ui-component';
import {
  PaginatorStateManager,
  PaginatorStateManagerParams,
  AccordionStateManager,
  AccordionStateManagerParams,
} from '../lib';

export type { PaginatorUIComponent, AccordionUIComponent };

interface PaginatorBaseParams<T> {
  items: T[];
  nextButtonText?: string;
  previousButtonText?: string;
  pageCountText?: PaginatorPageCountTextFn;
  actionId: PaginatorActionIdFn;
  blocksForEach: PaginatorBuilderFn<T>,
}

export type PaginatorParams<T> = PaginatorBaseParams<T> & PaginatorStateManagerParams;

export function Paginator<T>(params: PaginatorParams<T>): PaginatorUIComponent<T> {
  const { page, perPage, totalItems } = params;
  const stateManager = new PaginatorStateManager({ page, perPage, totalItems });

  return new PaginatorUIComponent<T>({
    items: params.items,
    paginator: stateManager,
    nextButtonText: params.nextButtonText || null,
    previousButtonText: params.previousButtonText || null,
    pageCountTextFunction: params.pageCountText || null,
    actionIdFunction: params.actionId,
    builderFunction: params.blocksForEach,
  });
}

export type EasyPaginatorParams<T> = Omit<PaginatorParams<T>, 'totalItems'>;

export function EasyPaginator<T>(params: EasyPaginatorParams<T>): PaginatorUIComponent<T> {
  const { page, perPage, items } = params;
  const totalItems = items.length;
  const paginationCalculator = new PaginatorStateManager({ page, perPage, totalItems });
  const extractedItems = paginationCalculator.extractItems(items);

  return new PaginatorUIComponent<T>({
    paginator: paginationCalculator,
    items: extractedItems,
    nextButtonText: params.nextButtonText || null,
    previousButtonText: params.previousButtonText || null,
    pageCountTextFunction: params.pageCountText || null,
    actionIdFunction: params.actionId,
    builderFunction: params.blocksForEach,
  });
}

interface AccordionBaseParams<T> {
  items: T[];
  expandButtonText?: string;
  collapseButtonText?: string;
  titleText: AccordionTitleTextFn<T>;
  actionId: AccordionActionIdFn;
  blocksForExpanded: PaginatorBuilderFn<T>,
}

export type AccordionParams<T> = AccordionBaseParams<T> & AccordionStateManagerParams;

export function Accordion<T>(params: AccordionParams<T>): AccordionUIComponent<T> {
  const { items, expandedItems, collapseOnExpand } = params;
  const stateManager = new AccordionStateManager({ expandedItems, collapseOnExpand });
  return new AccordionUIComponent<T>({
    items,
    paginator: stateManager,
    expandButtonText: params.expandButtonText || null,
    collapseButtonText: params.collapseButtonText || null,
    titleTextFunction: params.titleText,
    actionIdFunction: params.actionId,
    builderFunction: params.blocksForExpanded,
  });
}

const components = {
  Paginator,
  EasyPaginator,
  Accordion,
};

export { components as Components };
