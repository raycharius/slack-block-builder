module.exports = ({ Class, method, property, param, valid }) => {
  test(`Building the object with a set property of '${property}' should its literal value`, () => {
    const instance = new Class();

    instance[method](valid);

    const built = instance.build({ raw: true });

    expect(instance.result[param]).toEqual(valid);
    expect(built[param]).toEqual(instance.props[property]);
  });
};