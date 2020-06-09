const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.excludeBotUsers,
    invalid: invalid.excludeBotUsers,
    method: props.excludeBotUsers,
    property: props.excludeBotUsers,
    param: paramMap.filter,
  };

  return [
    checks.boolTrueProperty(config),
  ];
};