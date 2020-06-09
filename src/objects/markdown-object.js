const { ObjectBase } = require('./base');
const { types } = require('../utility/constants');

class MarkdownObject extends ObjectBase {
  constructor(text) {
    super();

    this.type = types.objects.markdown;
    this.text = text;

    this.cleanAndFreeze();
  }
}

module.exports = MarkdownObject;
