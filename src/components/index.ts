/* eslint-disable max-len */

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
  AccordionBuilderFn,
  AccordionIsExpandableFn,
} from './accordion-ui-component';
import {
  PaginatorStateManager,
  PaginatorStateManagerParams,
  AccordionStateManager,
  AccordionStateManagerParams,
} from '../internal';

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

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.items] An array of items to be displayed in the paginated content.
 * @param {int} [params.page] The number of the page to display.
 * @param {int} [params.perPage] The number of items to display on a page.
 * @param {int} [params.totalItems] The total number of items in the data set across all pages.
 * @param {PaginatorActionIdFn} [params.actionId] A function that receives pagination data and returns a string to set as the action IDs of the navigation buttons.
 * @param {PaginatorBuilderFn} [params.blocksForEach] A function that receives an object with a single item and returns the blocks to create for that item.
 * @param {string} [params.nextButtonText] The text to display on the button that moves forward in the pagination.
 * @param {string} [params.previousButtonText] The text to display on the button that moves backward in the pagination.
 * @param {PaginatorPageCountTextFn} [params.pageCountText] A function to create a custom page count in the UI.
 *
 * {@link https://www.blockbuilder.dev/#/components/paginator|View in Block Builder Documentation}
 */

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

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.items] An array of items to be displayed in the paginated content.
 * @param {int} [params.page] The number of the page to display.
 * @param {int} [params.perPage] The number of items to display on a page.
 * @param {PaginatorActionIdFn} [params.actionId] A function that receives pagination data and returns a string to set as the action IDs of the navigation buttons.
 * @param {PaginatorBuilderFn} [params.blocksForEach] A function that receives an object with a single item and returns the blocks to create for that item.
 * @param {string} [params.nextButtonText] The text to display on the button that moves forward in the pagination.
 * @param {string} [params.previousButtonText] The text to display on the button that moves backward in the pagination.
 * @param {PaginatorPageCountTextFn} [params.pageCountText] A function to create a custom page count in the UI.
 *
 * {@link https://www.blockbuilder.dev/#/components/easy-paginator|View in Block Builder Documentation}
 */

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
  blocksForExpanded: AccordionBuilderFn<T>,
  isExpandable?: AccordionIsExpandableFn<T>,
}

export type AccordionParams<T> = AccordionBaseParams<T> & AccordionStateManagerParams;

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.items] An array of items to be displayed in the expandable/collapsable content.
 * @param {AccordionTitleTextFn} [params.titleText] A function that receives an object with a single item and returns a string to be displayed next to the expand/collapse button.
 * @param {AccordionActionIdFn} [params.actionId] A function that receives the accordion state data and returns a string to set as the action IDs of the expand/collapse buttons.
 * @param {AccordionBuilderFn} [params.blocksForExpanded] A function that receives an object with a single item and returns the blocks to create for that item.
 * @param {AccordionIsExpandableFn} [params.isExpandable] A function that receives an item and and returns a boolean that tells if the section should have an expand/collapse button.
 * @param {string} [params.expandButtonText] The text to display on the button that expands an item in the UI.
 * @param {string} [params.collapseButtonText] The text to display on the button that collapses an item in the UI.
 *
 * {@link https://www.blockbuilder.dev/#/components/accordion|View in Block Builder Documentation}
 */

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
    isExpandableFunction: params.isExpandable || (() => true),
  });
}

const components = {
  Paginator,
  EasyPaginator,
  Accordion,
};

// Strange export. I know. For IDE highlighting purposes.

export { components as Components };
