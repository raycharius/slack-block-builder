module.exports = ({ Class, method, property, param, valid, expectArray, expectMarkdown }) => {
  test(`Building the object with a set property of '${property}' build '${property}' or each item inside of it`, () => {
    const instance = new Class();

    instance[method](valid);

    const built = instance.build({ raw: true }); // Add raw for surfaces

    expect(built).toHaveProperty(param);

    if (expectArray) {
      instance.result[param].forEach((value, i) => {
        expect(instance.props[property][i].hasBeenBuilt).toEqual(true);
        expect(built[param][i]).toEqual(instance.result[param][i]);
      });

      return;
    }

    expect(instance.props[property].hasBeenBuilt).toEqual(true);
    expect(built[param]).toEqual(instance.result[param]);
  });
};
