const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');
const types = require('../mocks/non-primitive-types');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.responseUrlEnabled,
    invalid: invalid.responseUrlEnabled,
    method: props.responseUrlEnabled,
    property: props.responseUrlEnabled,
    param: paramMap.responseUrlEnabled,
  };

  return [
    checks.boolTrueProperty(config),
    checks.literalBuild(config),
  ];
};