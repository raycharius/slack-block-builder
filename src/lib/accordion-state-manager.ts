export type AccordionState = number[];

export interface AccordionStateManagerParams {
  expandedItems: AccordionState;
  collapseOnExpand?: boolean;
}

export class AccordionStateManager {
  private readonly expandedItems: AccordionState;

  private readonly collapseOnExpand: boolean;

  constructor(params: AccordionStateManagerParams) {
    this.expandedItems = params.expandedItems || [];
    this.collapseOnExpand = params.collapseOnExpand || false;
  }

  public checkItemIsExpandedByIndex(index: number): boolean {
    return this.expandedItems.includes(index);
  }

  public getNextStateByItemIndex(index: number): AccordionState {
    if (index === undefined) {
      return this.expandedItems;
    }

    const isExpanded = this.checkItemIsExpandedByIndex(index);

    if (isExpanded) {
      const nextState = [...this.expandedItems];
      const expandedItemsIndex = this.expandedItems
        .findIndex((expandedItem) => expandedItem === index);

      nextState.splice(expandedItemsIndex, 1);

      return nextState;
    }
    return this.collapseOnExpand
      ? [index]
      : [...this.expandedItems, index];
  }
}
