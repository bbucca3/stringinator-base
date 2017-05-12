const _ = require('./underbar');

const first = function(str, n) {
  // Your code goes here
  const result = _.first(str.split(''), n);
  return result.length > 1 ? result.join('') : result;
};

const last = function(str, n) {
  // Your code goes here
  const result = _.last(str.split(''), n);
  return result.length > 1 ? result.join('') : result;
};

const removeChar = function(str, target) {
  // hint: use _.reject
  // Your code goes here
  return _.reject(str.split(''), char => char === target).join('');
};

const hasChar = function(str, target) {
  // hint: use _.some
  // Your code goes here
  return _.some(str.split(''), char => char === target);
};

const isOnlyDigits = function(str) {
  // Your code goes here
};

const filterToOnlyDigits = function(str) {
  // Your code goes here
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  // Your code goes here
};

const countChars = function(str) {
  // Your code goes here
};

const dedup = function(str) {
  // Your code goes here
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};