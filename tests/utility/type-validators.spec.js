const typeValidators = require('../../src/utility/validators/type-validators');
const { valid, invalid } = require('./mocks/type-validators.mock');

describe('Type Validators', () => {
  Object.keys(typeValidators).forEach((key) => {
    const validator = typeValidators[key];
    const validResult = validator.validate(valid[key]);
    const invalidResult = validator.validate(invalid[key]);

    test(`Passing valid arguments to the type validator with name ${key} will return failed with a value of false`, () => {
      expect(validResult.failed).toBeFalsy();
    });

    test(`Passing invalid arguments to the type validator with name ${key} will return passed with a value of true`, () => {
      expect(invalidResult.failed).toBeTruthy();
    });
  });
});
