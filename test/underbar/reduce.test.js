const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    // Your code goes here
    const array = [1, 2, 3];
    expect(_.reduce(array, (accumulator, current) => accumulator += current, 1)).toBe(7);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    // Your code goes here
    const array = [1, 2, 3];
    expect(_.reduce(array, (accumulator, current) => accumulator += current)).toBe(6);
  });

});