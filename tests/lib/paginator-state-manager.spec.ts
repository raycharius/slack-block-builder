import { PaginatorStateManager } from '../../src/lib';

describe('Testing Paginator State Manager:', () => {
  test('Instantiating with valid parameters produces a valid state.', () => {
    const manager = new PaginatorStateManager({ page: 5, perPage: 5, totalItems: 128 });

    expect(manager.getPage()).toEqual(5);
    expect(manager.getTotalItems()).toEqual(128);
    expect(manager.getTotalPages()).toEqual(26);
    expect(manager.getStateByPage(5)).toEqual({
      totalItems: 128,
      perPage: 5,
      totalPages: 26,
      offset: 20,
      page: 5,
    });
  });

  test('Instantiating with float parameters produces a valid state rounded down to nearest integer.', () => {
    const manager = new PaginatorStateManager({ page: 5.5, perPage: 5.5, totalItems: 128.5 });

    expect(manager.getPage()).toEqual(5);
    expect(manager.getTotalItems()).toEqual(128);
    expect(manager.getTotalPages()).toEqual(26);
    expect(manager.getStateByPage(5)).toEqual({
      totalItems: 128,
      perPage: 5,
      totalPages: 26,
      offset: 20,
      page: 5,
    });
  });

  test('Instantiating with absent page parameter produces a valid state with page set at default of one.', () => {
    const manager = new PaginatorStateManager({ page: null, perPage: 5.5, totalItems: 128.5 });

    expect(manager.getPage()).toEqual(1);
    expect(manager.getTotalItems()).toEqual(128);
    expect(manager.getTotalPages()).toEqual(26);
    expect(manager.getStateByPage(1)).toEqual({
      totalItems: 128,
      perPage: 5,
      totalPages: 26,
      offset: 0,
      page: 1,
    });
  });

  test('Requesting state for a different page produces a valid state.', () => {
    const manager = new PaginatorStateManager({ page: 5, perPage: 5, totalItems: 128 });

    expect(manager.getPage()).toEqual(5);
    expect(manager.getTotalItems()).toEqual(128);
    expect(manager.getTotalPages()).toEqual(26);
    expect(manager.getStateByPage(10)).toEqual({
      totalItems: 128,
      perPage: 5,
      totalPages: 26,
      offset: 45,
      page: 10,
    });
  });

  test('Passing in a zero value to page produces state starting at page one.', () => {
    const manager = new PaginatorStateManager({ page: 0, perPage: 5, totalItems: 128 });

    expect(manager.getPage()).toEqual(1);
    expect(manager.getTotalItems()).toEqual(128);
    expect(manager.getTotalPages()).toEqual(26);
    expect(manager.getStateByPage(1)).toEqual({
      totalItems: 128,
      perPage: 5,
      totalPages: 26,
      offset: 0,
      page: 1,
    });
  });

  test('Moving back one page from page one produces a valid state for the last page.', () => {
    const manager = new PaginatorStateManager({ page: 1, perPage: 5, totalItems: 128 });

    expect(manager.getPage()).toEqual(1);
    expect(manager.getTotalItems()).toEqual(128);
    expect(manager.getTotalPages()).toEqual(26);
    expect(manager.getStateByPage(0)).toEqual({
      totalItems: 128,
      perPage: 5,
      totalPages: 26,
      offset: 125,
      page: 26,
    });
  });

  test('Moving forward one page from last page produces a valid state for the first page.', () => {
    const manager = new PaginatorStateManager({ page: 26, perPage: 5, totalItems: 128 });

    expect(manager.getPage()).toEqual(26);
    expect(manager.getTotalItems()).toEqual(128);
    expect(manager.getTotalPages()).toEqual(26);
    expect(manager.getStateByPage(27)).toEqual({
      totalItems: 128,
      perPage: 5,
      totalPages: 26,
      offset: 0,
      page: 1,
    });
  });

  test('Test that the get state for next page method produces a valid state.', () => {
    const manager = new PaginatorStateManager({ page: 1, perPage: 5, totalItems: 128 });

    expect(manager.getPage()).toEqual(1);
    expect(manager.getTotalItems()).toEqual(128);
    expect(manager.getTotalPages()).toEqual(26);
    expect(manager.getNextPageState()).toEqual({
      totalItems: 128,
      perPage: 5,
      totalPages: 26,
      offset: 5,
      page: 2,
    });
  });

  test('Test once again, later in the pagination, that the get state for next page method produces a valid state.', () => {
    const manager = new PaginatorStateManager({ page: 5, perPage: 5, totalItems: 128 });

    expect(manager.getPage()).toEqual(5);
    expect(manager.getTotalItems()).toEqual(128);
    expect(manager.getTotalPages()).toEqual(26);
    expect(manager.getNextPageState()).toEqual({
      totalItems: 128,
      perPage: 5,
      totalPages: 26,
      offset: 25,
      page: 6,
    });
  });

  test('Test that the get state for previous page method produces a valid state.', () => {
    const manager = new PaginatorStateManager({ page: 26, perPage: 5, totalItems: 128 });

    expect(manager.getPage()).toEqual(26);
    expect(manager.getTotalItems()).toEqual(128);
    expect(manager.getTotalPages()).toEqual(26);
    expect(manager.getPreviousPageState()).toEqual({
      totalItems: 128,
      perPage: 5,
      totalPages: 26,
      offset: 120,
      page: 25,
    });
  });

  test('Test once again, earlier in the pagination, that the get state for previous page method produces a valid state.', () => {
    const manager = new PaginatorStateManager({ page: 10, perPage: 5, totalItems: 128 });

    expect(manager.getPage()).toEqual(10);
    expect(manager.getTotalItems()).toEqual(128);
    expect(manager.getTotalPages()).toEqual(26);
    expect(manager.getPreviousPageState()).toEqual({
      totalItems: 128,
      perPage: 5,
      totalPages: 26,
      offset: 40,
      page: 9,
    });
  });

  test('Passing in an array to the extract method returns a sliced array with the correct items.', () => {
    const manager = new PaginatorStateManager({ page: 2, perPage: 5, totalItems: 21 });

    expect(
      manager
        .extractItems([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    )
      .toEqual([5, 6, 7, 8, 9]);
  });
});
