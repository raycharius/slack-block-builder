class ObjectBase {
  cleanAndFreeze() {
    Object.keys(this)
      .forEach((prop) => typeof this[prop] === 'undefined' && delete this[prop]);

    return Object.freeze(this);
  }
}

module.exports = ObjectBase;
