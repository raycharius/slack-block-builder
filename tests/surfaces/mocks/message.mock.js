const { getSurfaces, ...Surfaces } = require('../../../src/surfaces');

const props = {
  channel: 'channel',
  text: 'text',
  threadTs: 1598918400,
  postAt: 1598918400,
};

const mock = new Surfaces.Message({ ...props });

module.exports = { props, mock };
