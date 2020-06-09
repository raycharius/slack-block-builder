const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.blockId,
    invalid: invalid.blockId,
    method: props.blockId,
    property: props.blockId,
    param: paramMap.blockId,
  };

  return [
    checks.settableProperty(config),
    checks.invalidValue(config),
    checks.literalBuild(config),
  ];
};