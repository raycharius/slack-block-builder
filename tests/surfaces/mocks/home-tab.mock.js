const { getSurfaces, ...Surfaces } = require('../../../src/surfaces');

const props = {
  privateMetaData: 'privateMetaData',
  callbackId: 'callbackId',
  externalId: 'externalId',
};

const mock = new Surfaces.HomeTab({ ...props });

module.exports = { props, mock };
