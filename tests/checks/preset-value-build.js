module.exports = ({ Class, method, property, param, value }) => {
  test(`Building the object with a set property of '${property}' should its literal value`, () => {
    const instance = new Class();

    instance[method](valid);

    const built = instance.build();

    expect(instance.result[property]).toEqual(valid);
    expect(built[param]).toEqual(instance.result[property]);
  });
};