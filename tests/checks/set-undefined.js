module.exports = ({ Class, classProps }) => {
  test(`Passing an value of 'undefined' a builder method should set as 'undefined'`, () => {
    const instance = new Class();
    const method = Object.keys(classProps)[0];

    instance[method]();

    expect(instance.props[method]).toBeUndefined();
  });
};