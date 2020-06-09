const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');
const types = require('../mocks/non-primitive-types');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.initialOption,
    invalid: invalid.initialOption,
    method: props.initialOption,
    property: props.initialOption,
    param: paramMap.initialOption,
    mutated: types.Option,
  };

  return [
    checks.settableProperty(config),
    checks.invalidValue(config),
    checks.builtChildBuild(config),
  ];
};