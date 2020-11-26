module.exports = ({ Class, method, property }) => {
  test(`Calling '${method}()' should set the '${property}' property to 'false'`, () => {
    const instance = new Class();

    instance[method]();

    expect(instance.props[property]).toEqual(false);
  });
};