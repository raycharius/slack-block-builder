export interface PaginationCalculatorParams {
  page: number;
  totalItems: number;
  perPage: number;
}

export class PaginationCalculator {
  private readonly page: number;

  private readonly totalItems: number;

  private readonly perPage: number;

  constructor(params: PaginationCalculatorParams) {
    this.page = Math.floor(params.page) || 1;
    this.totalItems = Math.floor(params.totalItems);
    this.perPage = Math.floor(params.perPage);
  }

  public getPage(): number {
    if (this.page < 1) {
      return this.getTotalPages();
    }

    return this.page > this.getTotalPages()
      ? 1
      : this.page;
  }

  public getPageByOffset(offset: number): number {
    return offset === 0 ? 1 : Math.ceil(offset / this.perPage) + 1;
  }

  public getTotalItems(): number {
    return this.totalItems;
  }

  public getPerPage(): number {
    return this.perPage;
  }

  public getTotalPages(): number {
    return Math.ceil(this.totalItems / this.perPage);
  }

  public getOffsetByPage(page: number): number {
    if (page === 1 || page > this.getTotalPages()) {
      return 0;
    }

    if (page < 1) {
      return this.totalItems - (this.totalItems % this.perPage);
    }

    return this.perPage * (page - 1);
  }

  public getOffset(): number {
    return this.getOffsetByPage(this.getPage());
  }

  public getNextPageOffset(): number {
    return this.getOffsetByPage(this.page + 1);
  }

  public getPreviousPageOffset(): number {
    return this.getOffsetByPage(this.page - 1);
  }

  public getFirstPageOffset(): number {
    return this.getOffsetByPage(1);
  }

  public getLastPageOffset(): number {
    return this.getOffsetByPage(this.getTotalPages());
  }

  public extractItems<T>(items: T[]): T[] {
    const beginning = this.getOffset();
    const end = beginning + this.perPage;

    return items.slice(beginning, end);
  }
}
