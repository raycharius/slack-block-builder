const { props, paramMap } = require('../../src/utility/constants');
const valid = require('../mocks/valid-prop-data-mapping');
const invalid = require('../mocks/invalid-prop-data-mapping');
const checks = require('../checks');
const types = require('../mocks/non-primitive-types');

module.exports = (params) => {
  const config = {
    ...params,
    valid: valid.initialUsers,
    invalid: invalid.initialUsers,
    method: props.initialUsers,
    property: props.initialUsers,
    param: paramMap.initialUsers,
  };

  return [
    checks.appendableProperty(config),
    checks.invalidValue(config),
    checks.literalBuild(config),
  ];
};