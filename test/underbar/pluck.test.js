const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    // Your code goes here
    let people = [
    {name: "Ben", age: 26},
    {name: "Ben", age: 27},
    {name: "Ben", age: 34}
    ];

    expect(_.pluck(people, "age")).toEqual([26, 27, 34]);
  });

});