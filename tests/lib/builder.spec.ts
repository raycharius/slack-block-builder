import { Modal } from '../../src';
import { Builder } from '../../src/lib';

describe('Testing Builder Class Methods:', () => {
  test('Instantiating with `undefined` values in constructor params does not add them to the `props` property of a builder.', () => {
    const myModal = Modal({
      title: undefined,
      close: undefined,
      submit: undefined,
    });

    // @ts-expect-error Props is not a public property, but necessary here
    expect(myModal.props).toEqual({});
  });

  test('When no `build()` method is defined in the composite class, an error should be thrown.', () => {
    class FakeBuilder extends Builder {}

    const fakeBuilder = new FakeBuilder();

    expect(() => fakeBuilder.build()).toThrow();
  });
});
