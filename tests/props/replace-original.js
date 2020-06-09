const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.replaceOriginal,
    invalid: invalid.replaceOriginal,
    method: props.replaceOriginal,
    property: props.replaceOriginal,
    param: paramMap.replaceOriginal,
  };

  return [
    checks.boolTrueProperty(config),
    checks.literalBuild(config),
  ];
};