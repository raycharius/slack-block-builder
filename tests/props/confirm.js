const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.confirm,
    invalid: invalid.confirm,
    method: props.confirm,
    property: props.confirm,
    param: paramMap.confirm,
  };

  return [
    checks.settableProperty(config),
    checks.invalidValue(config),
    checks.builtChildBuild(config),
  ];
};
