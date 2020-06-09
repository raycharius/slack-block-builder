module.exports = ({ Class, classProps, group }) => {
  test(`Calling the 'end()' method should return the instance of the object.`, () => {
    if (group === 'Surfaces') {
      return;
    }

    const instance = new Class(classProps);

    expect(instance.end()).toEqual(instance);
  });
};
