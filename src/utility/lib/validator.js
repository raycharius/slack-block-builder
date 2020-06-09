class Validator {
  constructor({ condition, message }) {
    this.condition = condition;
    this.message = message;
  }

  validate(value) {
    return {
      failed: !this.condition(value),
      message: this.message,
    };
  }
}

module.exports = Validator;
