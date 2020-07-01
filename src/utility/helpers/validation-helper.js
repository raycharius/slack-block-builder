const defaultTypeRules = require('../validators/default-type-rules');

class ValidationHelper {
  static getTypeValidator(prop) {
    return defaultTypeRules[prop];
  }
}

module.exports = ValidationHelper;
