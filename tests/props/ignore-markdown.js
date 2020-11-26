const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.ignoreMarkdown,
    invalid: invalid.ignoreMarkdown,
    method: props.ignoreMarkdown,
    property: props.mrkdwn,
    param: paramMap.mrkdwn,
  };

  return [
    checks.boolFalseProperty(config),
    checks.literalBuild(config),
  ];
};