const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');
const types = require('../mocks/non-primitive-types');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.excludeExternalSharedChannels,
    invalid: invalid.excludeExternalSharedChannels,
    method: props.excludeExternalSharedChannels,
    property: props.excludeExternalSharedChannels,
    param: paramMap.filter,
  };

  return [
    checks.boolTrueProperty(config),
  ];
};