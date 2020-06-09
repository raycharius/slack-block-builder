module.exports = ({ Class, method, property, param, valid, mutated, expectArray }) => {
  test(`Building the object with a set property of '${property}' should return a mutated value`, () => {
    const instance = new Class();

    instance[method](valid);

    const built = instance.build({ raw: true });

    if (expectArray) {
      instance.result[property].forEach((value, i) => {
        expect(instance.result[property][i]).toBeInstanceOf(mutated);
        expect(built[param][i]).toEqual(instance.result[property][i]);
      });

      return;
    }

    expect(instance.result[property]).toBeInstanceOf(mutated);
    expect(built[param]).toEqual(instance.result[property]);
  });
};