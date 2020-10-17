const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');
const types = require('../mocks/non-primitive-types');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.dispatchAction,
    invalid: invalid.dispatchAction,
    method: props.dispatchAction,
    property: props.dispatchAction,
    param: paramMap.dispatchAction,
  };

  return [
    checks.boolTrueProperty(config),
    checks.literalBuild(config),
  ];
};