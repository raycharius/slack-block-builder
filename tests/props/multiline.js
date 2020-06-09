const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');
const types = require('../mocks/non-primitive-types');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.multiline,
    invalid: invalid.multiline,
    method: props.multiline,
    property: props.multiline,
    param: paramMap.multiline,
  };

  return [
    checks.boolTrueProperty(config),
    checks.literalBuild(config),
  ];
};