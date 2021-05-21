"use strict";

Function.prototype.curry = function curried(...args) {
  if (args.length >= this.length) {
    return this.apply(this, args);
  } else {
    return (...args2) => {
      return curried.apply(this, args.concat(args2));
    };
  }
};

function abc(a, b, c) {
  return a + b + c;
}

function abcdef(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

console.log(abc.curry('A')('B')('C'));
console.log(abc.curry('A', 'B')('C'));
console.log(abc.curry('A', 'B', 'C'));

console.log(abcdef.curry('A')('B')('C')('D')('E')('F'));
console.log(abcdef.curry('A', 'B', 'C')('D', 'E', 'F'));