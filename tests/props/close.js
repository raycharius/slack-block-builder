const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');
const types = require('../mocks/non-primitive-types');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.close,
    invalid: invalid.close,
    method: props.close,
    property: props.close,
    param: paramMap.close,
    mutated: types.PlainTextObject,
  };

  return [
    checks.settableProperty(config),
    checks.invalidValue(config),
    checks.mutatedBuild(config),
  ];
};