//  ==== In TypeScript, there are several primitive types: number, string, boolean, null, and undefined.

let num: number; // This is a number type variable
let str: string; // This is a string type variable
let bool: boolean; // This is a boolean type variable
let nul: null; // This is a null type variable
let undef: undefined; // This is an undefined type variable

// Variable declaration and inference
// TypeScript can infer the type of the variable from the value it's assigned.

let age = 25; // TypeScript infers that age is a number
let userName = "Danny"; // TypeScript infers that name is a string
let isStudent = true; // TypeScript infers that isStudent is a boolean

// The `any` type and type casting
// The `any` type is a powerful way to work with existing JavaScript, allowing you to opt-out of type-checking.

let variable: any = "I am a string";
variable = 25; // No error, because variable is of type `any`

// Type casting can be done using the <TYPE>variable or variable as TYPE syntax.

let someValue: any = "this is a string";
let strLength2: number = (someValue as string).length; // Using variable as TYPE syntax

//  ==== But how about using const instead of let?

const age2 = 25; // TypeScript infers that age is only 25
const userName2 = "Danny"; // TypeScript infers that name is only "Danny"
