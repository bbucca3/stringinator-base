const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    // Your code goes here
    expect(_.map([1, 2, 2], (current) => current * current)).toEqual([1, 4, 4]);
  });
});