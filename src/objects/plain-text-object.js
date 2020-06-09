const { ObjectBase } = require('./base');
const { types } = require('../utility/constants');

class PlainTextObject extends ObjectBase {
  constructor(text) {
    super();

    this.type = types.objects.text;
    this.text = text;

    this.cleanAndFreeze();
  }
}

module.exports = PlainTextObject;
