const { globalChecks, callFromIndex, endMethodCall, setUndefined } = require('./checks');

module.exports = ({ props, config }) => {
  describe(`${config.className} Object`, () => {
    globalChecks(config);
    callFromIndex(config);
    props.forEach((prop) => prop(config));
    endMethodCall(config);
    setUndefined(config);
  });
};
