const { getSurfaces, ...Surfaces } = require('../../../src/surfaces');

const props = {
  privateMetaData: 'privateMetaData',
  callbackId: 'callbackId',
};

const mock = new Surfaces.WorkflowStep({ ...props });

module.exports = { props, mock };
