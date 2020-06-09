module.exports = ({ Class, method, property, valid }) => {
  test(`Passing a valid value '${method}()' should set the property`, () => {
    const instance = new Class();

    instance[method](valid);

    expect(instance.props[method]).toEqual(valid);
  });

  test(`Passing a consecutive value to method '${method}' should append the value to the property`, () => {
    const instance = new Class();

    instance[method](valid);
    instance[method](valid);

    expect(instance.props[property]).toEqual([...valid, ...valid]);
  });
};