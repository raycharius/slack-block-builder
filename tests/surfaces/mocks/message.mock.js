const { getSurfaces, ...Surfaces } = require('../../../src/surfaces');

const props = {
  channel: 'channel',
  text: 'text',
  ts: '1593125546.000100',
  threadTs: '1593125546.000100',
  postAt: 1593125546,
};

const mock = new Surfaces.Message({ ...props });

module.exports = { props, mock };
