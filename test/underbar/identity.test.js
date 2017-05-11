const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    // Your code goes here
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    // Your code goes here
    expect(_.identity(2)).toBe(2);
  });

  it('returns the same array if given an array', () => {
    // Your code goes here
    expect(_.identity([1, 2])).toEqual([1, 2]);
  });

  it('returns the same object if given an object', () => {
    // Your code goes here
    expect(_.identity({'name': 'Ben', age: 26})).toEqual({'name': 'Ben', age: 26});
  });
});