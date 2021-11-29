import { AccordionStateManager } from '../../src/internal';

describe('Testing Accordion State Mananger:', () => {
  test('Passing in an empty array of expanded items initiates the manager with an empty array', () => {
    const manager = new AccordionStateManager({ expandedItems: [], collapseOnExpand: false });

    // @ts-expect-error Props is not a public property, but necessary here
    expect(manager.expandedItems).toEqual([]);
  });

  test('Passing in an array of one expanded item initiates the manager with the same array', () => {
    const manager = new AccordionStateManager({ expandedItems: [0], collapseOnExpand: false });

    // @ts-expect-error Props is not a public property, but necessary here
    expect(manager.expandedItems).toEqual([0]);
  });

  test('Passing in an array of multiple expanded items initiates the manager with the same array', () => {
    const manager = new AccordionStateManager({
      expandedItems: [1, 2, 3],
      collapseOnExpand: false,
    });

    // @ts-expect-error Props is not a public property, but necessary here
    expect(manager.expandedItems).toEqual([1, 2, 3]);
  });

  test('Passing in an array of multiple expanded items initiates the manager with the same array', () => {
    const manager = new AccordionStateManager({
      expandedItems: [1, 2, 3],
      collapseOnExpand: false,
    });

    // @ts-expect-error Props is not a public property, but necessary here
    expect(manager.expandedItems).toEqual([1, 2, 3]);
  });

  test('Passing in a value of false to collapse on expand results in the manager having the same value.', () => {
    const manager = new AccordionStateManager({
      expandedItems: [1, 2, 3],
      collapseOnExpand: false,
    });

    // @ts-expect-error Props is not a public property, but necessary here
    expect(manager.collapseOnExpand).toEqual(false);
  });

  test('Passing in a value of true to collapse on expand results in the manager having the same value.', () => {
    const manager = new AccordionStateManager({
      expandedItems: [1, 2, 3],
      collapseOnExpand: true,
    });

    // @ts-expect-error Props is not a public property, but necessary here
    expect(manager.collapseOnExpand).toEqual(true);
  });

  test('Passing in a falsy value to collapse on expand results in the manager having a default value of false.', () => {
    const manager = new AccordionStateManager({
      expandedItems: [1, 2, 3],
      collapseOnExpand: null,
    });

    // @ts-expect-error Props is not a public property, but necessary here
    expect(manager.collapseOnExpand).toEqual(false);
  });

  test('Calling getNextStateByItemIndex with collapse on expand set to true results in an array with one single, correct value.', () => {
    const manager = new AccordionStateManager({
      expandedItems: [1],
      collapseOnExpand: true,
    });

    expect(manager.getNextStateByItemIndex(5)).toEqual([5]);
  });

  test('Calling getNextStateByItemIndex with collapse on expand set to true results in an array with one single, correct value, even when multiple values passed in.', () => {
    const manager = new AccordionStateManager({
      expandedItems: [1, 2, 3],
      collapseOnExpand: true,
    });

    expect(manager.getNextStateByItemIndex(5)).toEqual([5]);
  });

  test('Calling getNextStateByItemIndex with collapse on expand set to true with the same index results in an array of no values.', () => {
    const manager = new AccordionStateManager({
      expandedItems: [5],
      collapseOnExpand: true,
    });

    expect(manager.getNextStateByItemIndex(5)).toEqual([]);
  });

  test('Calling getNextStateByItemIndex with collapse on expand set to false with zero values at initiation produces an array with one item.', () => {
    const manager = new AccordionStateManager({
      expandedItems: [],
      collapseOnExpand: false,
    });

    expect(manager.getNextStateByItemIndex(5)).toEqual([5]);
  });

  test('Calling getNextStateByItemIndex with collapse on expand set to false with the same index results in an array of no values.', () => {
    const manager = new AccordionStateManager({
      expandedItems: [5],
      collapseOnExpand: false,
    });

    expect(manager.getNextStateByItemIndex(5)).toEqual([]);
  });

  test('Calling getNextStateByItemIndex with collapse on expand set to false with a different index results in an array with multiple.', () => {
    const manager = new AccordionStateManager({
      expandedItems: [5],
      collapseOnExpand: false,
    });

    expect(manager.getNextStateByItemIndex(10)).toEqual([5, 10]);
  });

  test('Calling getNextStateByItemIndex with collapse on expand set to false with a different index results in an array with multiple, from different position.', () => {
    const manager = new AccordionStateManager({
      expandedItems: [5, 10],
      collapseOnExpand: false,
    });

    expect(manager.getNextStateByItemIndex(5)).toEqual([10]);
  });

  test('Calling getNextStateByItemIndex with undefined value does not break things.', () => {
    const manager = new AccordionStateManager({
      expandedItems: [5, 10],
      collapseOnExpand: false,
    });

    expect(manager.getNextStateByItemIndex(undefined)).toEqual([5, 10]);
  });

  test('Calling checkItemIsExpandedByIndex with absent value produces a false result', () => {
    const manager = new AccordionStateManager({
      expandedItems: [5, 10],
      collapseOnExpand: false,
    });

    expect(manager.checkItemIsExpandedByIndex(9)).toEqual(false);
  });

  test('Calling checkItemIsExpandedByIndex with present value produces a true result', () => {
    const manager = new AccordionStateManager({
      expandedItems: [5, 10],
      collapseOnExpand: false,
    });

    expect(manager.checkItemIsExpandedByIndex(5)).toEqual(true);
  });
});
