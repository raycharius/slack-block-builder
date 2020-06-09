const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');
const types = require('../mocks/non-primitive-types');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.fields,
    invalid: invalid.fields,
    method: props.fields,
    property: props.fields,
    param: paramMap.fields,
    mutated: types.PlainTextObject,
    expectArray: true,
  };

  return [
    checks.appendableProperty(config),
    checks.mutatedBuild(config),
  ];
};