const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    // Your code goes here
    let array = [1, 2, 3];
    let count = 0;
    _.each(array, (current, index) => {
      expect(current).toEqual(array[index]);
      count++;
    });
    expect(count).toEqual(3);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    // Your code goes here
    let obj = {name: "Ben", length: 2};
    let count = 0;
    _.each(obj, (current, key) => {
      expect(current).toEqual(obj[key]);
      count++;
    });
    expect(count).toEqual(2);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    // Your code goes here
    let obj = {name: "Ben", length: 3, age: 26};
    let count = 0;
    _.each(obj, (value, key) => {
      expect(value).toEqual(obj[key]);
      count++;
    });
    expect(count).toEqual(3);
  });
});

