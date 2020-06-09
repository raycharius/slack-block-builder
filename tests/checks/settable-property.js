module.exports = ({ Class, method, property, valid }) => {
  test(`Passing a valid value to '${method}()' should set the property`, () => {
    const instance = new Class();

    instance[method](valid);

    expect(instance.props[property]).toEqual(valid);
  });

  test(`Passing an value to method '${method}()' when value is already set should throw an error`, () => {
    const instance = new Class();

    instance[method](valid);

    expect(() => instance[method](valid)).toThrow();
  });
};