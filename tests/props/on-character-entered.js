const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');
const types = require('../mocks/non-primitive-types');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.onEnterPressed,
    invalid: invalid.onEnterPressed,
    method: props.dispatchActionOnCharacterEntered,
    property: props.onCharacterEntered,
    param: paramMap.dispatchActionConfig,
  };

  return [
    checks.boolTrueProperty(config),
  ];
};