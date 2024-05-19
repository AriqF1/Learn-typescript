// Lesson: Variables and Values (Non Primitive)

// Intro to Non Primitive Values
// Non-primitive types in TypeScript include: object, array, and function.

// Function
// Functions are blocks of code designed to perform a particular task.

function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet("Danny"); // Outputs: Hello, Danny!

// Object
// An object is a standalone entity, with properties and type.

const student: {
  name: string;
  age: number;
  isStudent: boolean;
} = {
  name: "Danny",
  age: 25,
  isStudent: true,
};

console.log(student.name); // Outputs: Danny

// Array
// An array is a special type of object used for storing multiple values in a single variable.

const numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers[0]); // Outputs: 1

const names: Array<string> = ["Danny", "Aka", "Ilham"];
console.log(names[1]); // Outputs: Sandy
