const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');
const types = require('../mocks/non-primitive-types');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.initialChannels,
    invalid: invalid.initialChannels,
    method: props.initialChannels,
    property: props.initialChannels,
    param: paramMap.initialChannels,
  };

  return [
    checks.appendableProperty(config),
    checks.invalidValue(config),
    checks.literalBuild(config),
  ];
};