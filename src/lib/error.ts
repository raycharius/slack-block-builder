export class BlockBuilderError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BlockBuilderError';
  }
}
