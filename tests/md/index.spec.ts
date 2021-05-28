import { Md } from '../../src';

describe('Testing Md Helper Class:', () => {
  test('Check Md.quote()', () => {
    expect(Md.quote('hello')).toEqual('"hello"');
  });

  test('Check Md.blockquote()', () => {
    expect(Md.blockquote('hello')).toEqual('>hello');
  });

  test('Check Md.bold()', () => {
    expect(Md.bold('hello')).toEqual('*hello*');
  });

  test('Check Md.italic()', () => {
    expect(Md.italic('hello')).toEqual('_hello_');
  });

  test('Check Md.strike()', () => {
    expect(Md.strike('hello')).toEqual('~hello~');
  });

  test('Check Md.code()', () => {
    expect(Md.code('hello')).toEqual('`hello`');
  });

  test('Check Md.listDash() with three arguments', () => {
    expect(Md.listDash('hello', 'hello', 'hello')).toEqual('- hello\n- hello\n- hello');
  });

  test('Check Md.listDash() with array', () => {
    expect(Md.listDash(['hello', 'hello', 'hello'])).toEqual('- hello\n- hello\n- hello');
  });

  test('Check Md.listBullet() with three arguments', () => {
    expect(Md.listBullet('hello', 'hello', 'hello')).toEqual('• hello\n• hello\n• hello');
  });

  test('Check Md.listBullet() with array', () => {
    expect(Md.listBullet(['hello', 'hello', 'hello'])).toEqual('• hello\n• hello\n• hello');
  });

  test('Check Md.link() with one argument', () => {
    expect(Md.link('https://macpaw.com')).toEqual('<https://macpaw.com>');
  });

  test('Check Md.link() with two arguments', () => {
    expect(Md.link('https://macpaw.com', 'MacPaw Website')).toEqual('<https://macpaw.com|MacPaw Website>');
  });

  test('Check Md.mailto()', () => {
    expect(Md.mailto('test@test.com', 'Ray East')).toEqual('<mailto:test@test.com|Ray East>');
  });

  test('Check Md.user()', () => {
    expect(Md.user('hello')).toEqual('<@hello>');
  });

  test('Check Md.channel()', () => {
    expect(Md.channel('hello')).toEqual('<#hello>');
  });

  test('Check Md.group()', () => {
    expect(Md.group('hello')).toEqual('<!subteam^hello>');
  });
});
