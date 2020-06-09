module.exports = ({ Class, method, invalid }) => {
  test(`Passing invalid value to '${method}()' should throw an error`, () => {
    const instance = new Class();

    expect(() => instance[method](invalid)).toThrow();
  });
};