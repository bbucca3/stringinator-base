const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      // Your code goes here
      expect(_.every([1, 2, 3, 4])).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      // Your code goes here
      expect(_.every([1, 3, 5, 7, 9], num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      // Your code goes here
      expect(_.every([1, 2, 5, 7, 9], num => num % 2 === 1)).toBe(false);
    });

  });
});