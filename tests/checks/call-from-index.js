const index = require('../../src');

module.exports = ({ Class, className, classProps, group }) => {
  test(`Calling the ${className} object from the src/index.js file should return an instance of the object`, () => {
    const instance = index[className] ? index[className]() : index[group][className]();

    expect(instance).toBeInstanceOf(Class);
  });

  test(`Calling the ${className} object from the src/index.js with parameters should return an instance of the object with props`, () => {
    const instance = index[className] ? index[className](classProps) : index[group][className](classProps);

    expect(instance).toBeInstanceOf(Class);
    expect(instance).toMatchObject({ props: classProps });
  });
};
