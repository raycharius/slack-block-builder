const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.threadsTs,
    invalid: invalid.threadsTs,
    method: props.threadTs,
    property: props.threadTs,
    param: paramMap.threadTs,
  };

  return [
    checks.settableProperty(config),
    checks.invalidValue(config),
    checks.literalBuild(config),
  ];
};