const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');
const types = require('../mocks/non-primitive-types');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.filter,
    invalid: invalid.filter,
    method: props.filter,
    property: props.filter,
    param: paramMap.filter,
    mutated: types.FilterObject,
  };

  return [
    checks.appendableProperty(config),
    checks.invalidValue(config),
    checks.mutatedBuild(config),
  ];
};