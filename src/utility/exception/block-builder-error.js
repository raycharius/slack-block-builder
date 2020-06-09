class BlockBuilderError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BlockBuilderError';
  }
}

module.exports = BlockBuilderError;
