import { Modal } from '../../src';
import { Builder } from '../../src/internal';

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

  test('Builder constructor should copy properties.', () => {
    class TestBuilder extends Builder {
      public set(value: unknown, prop: string): this {
        return super.set(value, prop);
      }
    }

    const commonProps = {foo: '42'};
    const testBuilder1 = new TestBuilder(commonProps);
    const testBuilder2 = new TestBuilder(commonProps);

    expect(() => testBuilder1.set('43', 'foo')).toThrow(); // property already set via constructor

    testBuilder1.set('value', 'prop');
    expect(() => testBuilder2.set('value', 'prop')).not.toThrow(); // each builder instance has its own properties
  });
});
