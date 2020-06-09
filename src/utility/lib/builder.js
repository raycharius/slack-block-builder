const { ValidationHelper } = require('../helpers');
const { BlockBuilderError, BlockBuilderValidationError } = require('../exception');

class Builder {
  constructor() {
    this.class = this.constructor.name;
    this.category = null;
    this.props = {};
    this.result = {};
    this.hasBeenBuilt = false;
  }

  /**
   * @protected
   */

  set(value, prop) {
    if (typeof this.props[prop] !== 'undefined') {
      throw new BlockBuilderError(`Property ${prop} for ${this.constructor.name} can only be assigned once.`);
    }

    this.validateProp(value, prop);

    this.props[prop] = value;

    return this;
  }

  /**
   * @protected
   */

  append(value, prop) {
    const prunedValue = value.filter((item) => typeof item !== 'undefined');

    if (prunedValue.length > 0) {
      this.validateProp(prunedValue, prop);

      this.props[prop] = typeof this.props[prop] === 'undefined'
        ? value
        : this.props[prop].concat(value);
    }

    return this;
  }

  /**
   * @protected
   */

  getResult(Class, augmentedProps) {
    this.validateState();

    this.result = new Class({ ...this.props, ...augmentedProps });
    this.hasBeenBuilt = true;

    Object.freeze(this);

    return this.result;
  }

  /**
   * @protected
   */

  finalizeConstruction() {
    Object.keys(this.props).map((prop) => this.validateProp(this.props[prop], prop));
    Object.keys(this.props).forEach((prop) => typeof this.props[prop] === 'undefined' && delete this.props[prop]);
    Object.seal(this);
  }

  /**
   * @private
   */

  validateProp(value, prop) {
    this.validateState();

    if (typeof value === 'undefined') {
      return null;
    }

    const typeValidator = ValidationHelper.getTypeValidator(prop);
    const typeValidation = typeValidator.validate(value);

    if (typeValidation.failed) {
      throw new BlockBuilderValidationError(`Property '${prop}' of ${this.constructor.name} only accepts ${typeValidation.message}.`);
    }
  }

  /**
   * @private
   */

  validateState() {
    if (this.hasBeenBuilt) {
      throw new BlockBuilderError(`Builder for ${this.constructor.name} has been built and can no longer be modified.`);
    }
  }

  /**
   * Should not be called directly
   * @protected
   */

  build() {
    throw new BlockBuilderError(`Builder ${this.constructor.name} must have a declared 'build' method`);
  }
}

module.exports = Builder;
