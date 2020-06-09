const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.defaultToCurrentConversation,
    invalid: invalid.defaultToCurrentConversation,
    method: props.defaultToCurrentConversation,
    property: props.defaultToCurrentConversation,
    param: paramMap.defaultToCurrentConversation,
  };

  return [
    checks.boolTrueProperty(config),
    checks.literalBuild(config),
  ];
};