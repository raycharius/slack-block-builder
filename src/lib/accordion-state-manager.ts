export type State = number[];

export interface AccordionStateManagerParams {
  totalItems: number;
  state: State;
  collapseOnExpand?: boolean;
}

export class AccordionStateManager {
  private readonly totalItems: number;

  private readonly state: State;

  private readonly collapseOnExpand: boolean;

  constructor(params: AccordionStateManagerParams) {
    this.totalItems = params.totalItems;
    this.state = this.initializeState(params.state);
    this.collapseOnExpand = params.collapseOnExpand || false;
  }

  private static isExpanded(position: number): boolean {
    return Math.sign(position) === -1;
  }

  private initializeState(state: State): State {
    return Array.isArray(state) && state.length > 0
      ? state
      : this.getDefaultState();
  }

  private getDefaultState(): State {
    const defaultState = [];

    for (let i = 0; i < this.totalItems; i += 1) {
      defaultState.push(i + 1);
    }

    return defaultState;
  }

  public getItemStateByIndex(index: number): number {
    return this.state.find((position) => Math.abs(position) === index + 1);
  }

  public checkItemIsExpandedByIndex(index: number): boolean {
    const itemState = this.getItemStateByIndex(index);

    return AccordionStateManager.isExpanded(itemState);
  }

  public getNextStateByItemIndex(index: number): State {
    const currentState = this.getItemStateByIndex(index);

    return this.state.map((itemState) => {
      if (currentState === itemState) {
        return AccordionStateManager.isExpanded(itemState)
          ? Math.abs(itemState)
          : -Math.abs(itemState);
      }

      return this.collapseOnExpand
        ? Math.abs(itemState)
        : itemState;
    });
  }
}
