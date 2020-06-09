const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.privateMetaData,
    invalid: invalid.privateMetaData,
    method: props.privateMetaData,
    property: props.privateMetaData,
    param: paramMap.privateMetaData,
  };

  return [
    checks.settableProperty(config),
    checks.invalidValue(config),
    checks.literalBuild(config),
  ];
};