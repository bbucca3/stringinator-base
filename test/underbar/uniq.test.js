const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    // Your code goes here
    expect(_.uniq([1, 1, 1, 0, 0])).toEqual([1, 0]);
  });
});