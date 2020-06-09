const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');
const types = require('../mocks/non-primitive-types');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.optionGroups,
    invalid: invalid.optionGroups,
    method: props.optionGroups,
    property: props.optionGroups,
    param: paramMap.optionGroups,
    mutated: types.OptionGroup,
    expectArray: true,
  };

  return [
    checks.appendableProperty(config),
    checks.invalidValue(config),
    checks.builtChildBuild(config),
  ];
};