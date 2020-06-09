const Builder = require('../../../src/utility/lib/builder');

describe('Builder', () => {
  test('Creating a Builder without a \'builder\' method and calling that method will throw an error', () => {
    const builder = new Builder();
    expect(() => builder.build()).toThrow();
  });
});
