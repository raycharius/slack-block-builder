const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.notifyOnClose,
    invalid: invalid.notifyOnClose,
    method: props.notifyOnClose,
    property: props.notifyOnClose,
    param: paramMap.notifyOnClose,
  };

  return [
    checks.boolTrueProperty(config),
    checks.literalBuild(config),
  ];
};