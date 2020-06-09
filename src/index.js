const { getSurfaces } = require('./surfaces');
const { getBlocks } = require('./blocks');
const { getBits } = require('./bits');
const { getElements } = require('./elements');

const Bits = getBits();
const Blocks = getBlocks();
const Elements = getElements();

module.exports = {
  ...getSurfaces(),
  Blocks,
  Elements,
  Bits,
};
