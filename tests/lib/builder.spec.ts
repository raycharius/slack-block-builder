import { Modal } from '../../src';
import { Builder } from '../../src/lib';

describe('Testing Builder Class Methods:', () => {
  test('Instantiating with undefined values in constructor params does not add them to the `props` property of a build subclass.', () => {
    const myModal = Modal({
      title: undefined,
      close: undefined,
      submit: undefined,
    });

    console.log(myModal)

    // @ts-expect-error Props is not a public property, but necessary here
    expect(myModal.props).toEqual({});
  });

  test('After being built, the builder should not be able to be built anymore.', () => {
    class FakeBuilder extends Builder {}

    const fakeBuilder = new FakeBuilder();

    expect(() => fakeBuilder.build()).toThrow();
  });
});
