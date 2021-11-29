export interface PaginatorStateManagerParams {
  page: number;
  perPage: number;
  totalItems: number;
}

export interface PaginatorState extends PaginatorStateManagerParams {
  totalPages: number;
  offset: number;
}

export class PaginatorStateManager {
  private readonly page: number;

  private readonly perPage: number;

  private readonly totalItems: number;

  private readonly totalPages: number;

  private readonly offset: number;

  constructor(params: PaginatorStateManagerParams) {
    const state = PaginatorStateManager.calculateState({
      page: Math.floor(params.page) || 1,
      totalItems: Math.floor(params.totalItems) || 1,
      perPage: Math.floor(params.perPage),
    });

    this.page = state.page;
    this.perPage = state.perPage;
    this.totalItems = state.totalItems;
    this.totalPages = state.totalPages;
    this.offset = state.offset;
  }

  private static calculateState(params: PaginatorStateManagerParams): PaginatorState {
    const { page, totalItems, perPage } = params;
    const totalPages = Math.ceil(totalItems / perPage);
    const calculatedPage = PaginatorStateManager.calculatePage(page, totalPages);
    const offset = (calculatedPage - 1) * perPage;

    return {
      totalItems,
      perPage,
      totalPages,
      offset,
      page: calculatedPage,
    };
  }

  private static calculatePage(page: number, totalPages: number): number {
    if (page < 1) {
      return totalPages;
    }

    return page > totalPages ? 1 : page;
  }

  public getPage(): number {
    return this.page;
  }

  public getTotalPages(): number {
    return this.totalPages;
  }

  public getTotalItems(): number {
    return this.totalItems;
  }

  public getStateByPage(page: number): PaginatorState {
    return PaginatorStateManager.calculateState({
      page,
      perPage: this.perPage,
      totalItems: this.totalItems,
    });
  }

  public getNextPageState(): PaginatorState {
    return this.getStateByPage(this.page + 1);
  }

  public getPreviousPageState(): PaginatorState {
    return this.getStateByPage(this.page - 1);
  }

  public extractItems<T>(items: T[]): T[] {
    const beginning = this.offset;
    const end = beginning + this.perPage;

    return items.slice(beginning, end);
  }
}
