const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    // Your code goes here
    expect(_.filter([2, 4, 6, 7], num => num % 2 === 1)).toEqual([7]);
  });

  it('filters an object to only numeric values', () => {
    // Your code goes here
    expect(_.filter({num1:1, num2:2, num3:3}, num => typeof num === 'number')).toEqual([1, 2, 3]);
  });
});