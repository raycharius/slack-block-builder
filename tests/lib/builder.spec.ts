import { Modal } from '../../src';
import { Builder } from '../../src/lib';

describe('Testing Builder Class Methods:', () => {
  test('Instantiating with undefined values in constructor params does not add them to the `props` property of a build subclass.', () => {
    const myModal = Modal({
      title: undefined,
      close: undefined,
      submit: undefined,
    });

    // @ts-expect-error Props is not a public property, but necessary here
    expect(myModal.props).toEqual({ type: 'modal' });
  });

  test('After instantiation, the builder subclass should be able to be built, before the `build()` method has been called.', () => {
    const myModal = Modal();

    expect(myModal.canBeBuilt()).toEqual(true);

    myModal.build();

    expect(myModal.canBeBuilt()).toEqual(false);
  });

  test('After being built, the builder should not be able to be built anymore.', () => {
    const myModal = Modal();

    myModal.build();

    expect(myModal.canBeBuilt()).toEqual(false);
  });

  test('After being built, the builder should not be able to be built anymore.', () => {
    class FakeBuilder extends Builder {
      constructor() {
        super();
      }
    }

    const fakeBuilder = new FakeBuilder();

    expect(() => fakeBuilder.build()).toThrow();
  });
});
