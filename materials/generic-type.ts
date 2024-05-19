// Generic Function
// A generic function is a function that can work on any data type.

function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString"); // type of output will be 'string'
let output2 = identity<number>(100); // type of output will be 'number'

// Generic Interface & Types
// Interfaces can also be generic, meaning they can have type parameters.

interface GenericIdentityFn<T> {
  (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity;

// Generic Class
// A generic class has a similar shape to a generic interface.

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
