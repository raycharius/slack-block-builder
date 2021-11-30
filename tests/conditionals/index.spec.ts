import {
  conditionals,
  setIfFalsy,
  setIfTruthy,
  omitIfFalsy,
  omitIfTruthy,
} from '../../src';

describe('Testing Inline Conditional Helpers:', () => {
  const returnValue = 'Hello World';

  test('All members of the `conditionals` object are defined.', () => {
    expect(conditionals.setIfFalsy).toBeDefined();
    expect(conditionals.setIfTruthy).toBeDefined();
    expect(conditionals.omitIfFalsy).toBeDefined();
    expect(conditionals.omitIfTruthy).toBeDefined();
  });

  test('Calling `setIfFalsy()` with falsy conditions returns the value passed as the second arg.', () => {
    expect(setIfFalsy(false, returnValue)).toEqual(returnValue);
    expect(setIfFalsy(null, returnValue)).toEqual(returnValue);
    expect(setIfFalsy(undefined, returnValue)).toEqual(returnValue);
  });

  test('Calling `omitIfFalsy()` with falsy conditions returns undefined.', () => {
    expect(omitIfFalsy(false, returnValue)).toEqual(undefined);
    expect(omitIfFalsy(null, returnValue)).toEqual(undefined);
    expect(omitIfFalsy(undefined, returnValue)).toEqual(undefined);
  });

  test('Calling `setIfTruthy()` with truthy conditions returns the value passed as the second arg.', () => {
    expect(setIfTruthy('hello', returnValue)).toEqual(returnValue);
    expect(setIfTruthy(0, returnValue)).toEqual(returnValue);
    expect(setIfTruthy(true, returnValue)).toEqual(returnValue);
  });

  test('Calling `omitIfTruthy()` with falsy conditions returns undefined.', () => {
    expect(omitIfTruthy('hello', returnValue)).toEqual(undefined);
    expect(omitIfTruthy(0, returnValue)).toEqual(undefined);
    expect(omitIfTruthy(true, returnValue)).toEqual(undefined);
  });
});
