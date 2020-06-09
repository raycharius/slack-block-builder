const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');
const types = require('../mocks/non-primitive-types');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.title,
    invalid: invalid.title,
    method: props.title,
    property: props.title,
    param: paramMap.title,
    mutated: types.PlainTextObject,
  };

  return [
    checks.settableProperty(config),
    checks.invalidValue(config),
    checks.mutatedBuild(config),
  ];
};