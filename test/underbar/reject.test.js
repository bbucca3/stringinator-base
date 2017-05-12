const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    // Your code goes here
    expect(_.reject([1, 2, 3, 4], num => num % 2 === 1)).toEqual([2, 4]);
  });

  it('rejects null values from an object', () => {
    // Your code goes here
    expect(_.reject({name:"Ben", age: null}, val => val === null)).toEqual(["Ben"]);
  });
});