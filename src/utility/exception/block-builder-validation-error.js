class BlockBuilderValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BlockBuilderValidationError';
  }
}

module.exports = BlockBuilderValidationError;
