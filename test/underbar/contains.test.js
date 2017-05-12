const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    // Your code goes here
    expect(_.contains([0, 1, 2], 2)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    // Your code goes here
    expect(_.contains([0, 1, 2], 3)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    // Your code goes here    
    expect(_.contains({1:"Ben", 2:"Bucca"}, "Ben")).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    // Your code goes here 
    expect(_.contains({1:"Ben", 2:"Bucca"}, 'quux')).toBe(false);
  });

});