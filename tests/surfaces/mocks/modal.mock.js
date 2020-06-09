const { getSurfaces, ...Surfaces } = require('../../../src/surfaces');

const props = {
  title: 'title',
  close: 'close',
  submit: 'submit',
  privateMetaData: 'privateMetaData',
  callbackId: 'callbackId',
  externalId: 'externalId',
};

const mock = new Surfaces.Modal({ ...props });

module.exports = { props, mock };
