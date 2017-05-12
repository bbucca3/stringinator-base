const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    // Your code goes here
    expect(_.isArrayLike([1, 2])).toBe(true);
  });

  it('returns true for an array-like object', () => {
    // Your code goes here
    expect(_.isArrayLike({name: "Ben", length: 2})).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    // Your code goes here
    expect(_.isArrayLike({name: "Ben"})).toBe(false);
  });
});
