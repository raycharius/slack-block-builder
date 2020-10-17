const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');
const types = require('../mocks/non-primitive-types');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.initialTime,
    invalid: invalid.initialTime,
    method: props.initialTime,
    property: props.initialTime,
    param: paramMap.initialTime,
    mutated: types.Date,
  };

  return [
    checks.settableProperty(config),
    checks.invalidValue(config),
  ];
};