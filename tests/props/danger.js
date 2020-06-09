const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.danger,
    invalid: invalid.danger,
    method: props.danger,
    property: props.style,
    param: paramMap.style,
  };

  return [
    checks.settableProperty(config),
    checks.literalBuild(config),
  ];
};