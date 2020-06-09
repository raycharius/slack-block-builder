class SlackDto {
  /**
   * @protected
   */

  pruneAndFreeze() {
    Object.keys(this)
      .forEach((prop) => typeof this[prop] === 'undefined' && delete this[prop]);

    Object.freeze(this);
  }
}

module.exports = SlackDto;
