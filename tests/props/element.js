const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');
const types = require('../mocks/non-primitive-types');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.element,
    invalid: invalid.element,
    method: props.element,
    property: props.element,
    param: paramMap.element,
    mutated: types.Element,
  };

  return [
    checks.settableProperty(config),
    checks.invalidValue(config),
    checks.builtChildBuild(config),
  ];
};