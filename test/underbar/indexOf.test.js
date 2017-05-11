const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    // Your code goes here
    expect(_.indexOf([1, 2, 3], 1, 0)).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    // Your code goes here
    expect(_.indexOf([1, 2, 3], 3, 0)).toBe(2);
  });

  it('returns -1 for a missing value', () => {
    // Your code goes here
    expect(_.indexOf([1, 2, 3], 100, 0)).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    // Your code goes here
    expect(_.indexOf([1, 2, 3, 2], 2, 1)).toBe(1);
  });

  it('starts searching at the given offset', () => {
    // Your code goes here
    expect(_.indexOf([1, 2, 3, 2], 3, 2)).toBe(2);
  });

});