const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.submitDisabled,
    invalid: invalid.submitDisabled,
    method: props.submitDisabled,
    property: props.submitDisabled,
    param: paramMap.submitDisabled,
  };

  return [
    checks.boolTrueProperty(config),
    checks.literalBuild(config),
  ];
};