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
  return _.every(str.split(''), char => char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57);
};

const filterToOnlyDigits = function(str) {
  // Your code goes here
  return _.filter(str.split(''), char => char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57).join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  // Your code goes here
  return _.map(obj, value => truncateString(value, maxLength));
};

const countChars = function(str) {
  // Your code goes here  
  return _.reduce(str, (obj, char) => {
    if (obj[char]) {
      obj[char]++;
    }
    else {
      obj[char] = 1;
    }
    return obj;
  }, {});
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