const { Builder } = require('../../utility/lib');
const { categories } = require('../../utility/constants');

class Bit extends Builder {
  constructor() {
    super();

    this.category = categories.bit;
  }

  /**
   * Performs no alterations to the object. Meant to simulate a closing
   * HTML tag for those who prefer the look of such code.
   *
   * @return {this} The instance on which the method is called
   */

  end() {
    return this;
  }
}

module.exports = Bit;
