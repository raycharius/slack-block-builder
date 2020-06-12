const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.inChannel,
    invalid: invalid.inChannel,
    method: props.inChannel,
    property: props.responseType,
    param: paramMap.responseType,
  };

  return [
    checks.settableProperty(config),
    checks.literalBuild(config),
  ];
};
