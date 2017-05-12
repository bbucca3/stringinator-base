const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    // Your code goes here
    expect(_.some([0, 2, 4, 6, 9], num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    // Your code goes here
    expect(_.every([2, 4, 6], num => num % 2 === 1)).toBe(false);
  });

});