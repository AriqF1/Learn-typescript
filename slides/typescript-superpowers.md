---
title: Course Typescript Yang Pasti Kepake di Industri
author: Danny Dwi Cahyono
marp: true
paginate: true
theme: gaia
class:
  - invert
transition: fade
---

# Introduction to TypeScript

---

## Why TypeScript?

- Strongly typed programming language
- Superset of JavaScript
- Enhanced tooling and error checking
- Better code maintainability and readability

![TypeScript Logo](https://www.typescriptlang.org/assets/images/icons/icon-48x48.png)

---

## TypeScript Adoption

- Used by large companies (Microsoft, Google, Airbnb)
- Popular in modern web development frameworks (Angular, NestJS)
- Growing demand in the job market

---

## Prerequisites

- Basic knowledge of JavaScript
- Familiarity with programming concepts
- Node.js and npm installed

---

## Course Overview

1. Introduction
2. Variables and Values (Primitive)
3. Variables and Values (Non-Primitive)
4. Interfaces and Type Aliases
5. Generics Type
6. Projects (Cashier Application)
7. Wrap Up

---

## Course Repository

- Clone the repository:
  ```bash
  git clone https://github.com/dannycahyo/typescript-superpowers.git
  ```
- Let's walk through the README.md file for more details.

---

## Let's Get Started!

![Let's Go](https://media.giphy.com/media/3o7TKz9bX9v6ZvZ8vC/giphy.gif)

---

## Typescript vs JavaScript

![TypeScript](https://www.typescriptlang.org/assets/images/icons/apple-touch-icon-180x180.png)

---

## Basic and Minimum Setup

- Install TypeScript globally:
  ```bash
  npm install -g typescript
  ```
- Check the TypeScript version:
  ```bash
  tsc -v
  ```
- Create a new TypeScript file:
  ```bash
  touch <filename>.ts
  ```

---

## Compiling TypeScript

- Compile TypeScript files to JavaScript:
  ```bash
  tsc <filename>.ts
  ```
- Run the compiled JavaScript file:
  ```bash
  node <filename>.js
  ```

---

# Variables and Primitive Values

## Overview

- Introduction to primitive values
- Variable declaration and inference
- The `any` type and type casting

---

## Primitive Values

- `number`
- `string`
- `boolean`
- `null`
- `undefined`

![Just Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures/Intro_to_JavaScript/Overview_primitives.png)

---

## Variable Declaration

You can declare variables using `let`, `const`, and `var`:

```typescript
let age: number = 25;
const name: string = "Danny";
var isStudent: boolean = true;
```

---

## Type Inference

Typescript can infer types based on the assigned value:

```typescript
let inferredString = "Hello, TypeScript!";
```

---

## The `any` Type

Use `any` type when you don't know the variable's type:

```typescript
let dynamicVar: any = "Could be anything";
dynamicVar = 42;
```

---

## Type Casting

You can cast a variable to a specific type using the `as` keyword:

```typescript
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
```

---

## Summary

- Primitive values are the basic data types
- TypeScript can infer types
- Use `any` type for dynamic values
- Type casting allows you to specify a variable's type

---

## Ready for More?

Continue to the next section: Variables and Non-Primitive Values

---

# Variables and Non-Primitive Values

## Overview

- Functions
- Objects
- Arrays

---

## Functions

Functions can be defined as:

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

---

## Objects

Objects are key-value pairs:

```typescript
const person: { name: string; age: number } = {
  name: "Danny",
  age: 25,
};
```

---

## Arrays

Arrays hold a list of values:

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];

const names: Array<string> = ["Danny", "Aka", "Ilham"];
```

---

## Summary

- Functions are defined with parameters and return types
- Objects are key-value pairs with specific types
- Arrays can hold a list of values with specific types

---

# Interfaces and Type Aliases

## Overview

- Type Aliases
- Interfaces
- Recursive Types

---

## Type Aliases

Type aliases allow you to create a new name for a type:

```typescript
type UserID = string | number;

type User = {
  id: UserID;
  name: string;
};
```

---

## Interfaces

Interfaces define the structure of an object:

```typescript
interface User {
  id: UserID;
  name: string;
  isAdmin?: boolean;
}
```

---

## Recursive Types

Recursive types can reference themselves:

```typescript
type TreeNode = {
  value: number;
  left?: TreeNode;
  right?: TreeNode;
};
```

## Summary

- Type aliases simplify complex types definitions
- Interfaces ensure consistent object structures
- Recursive types enable self-referencing structures

---

# Generics in TypeScript

## Overview

- When to use generic types
- Declaring generic types
- Generic functions

---

## When to Use Generics

Generics allow you to write flexible, reusable code that can work with multiple types.

- Functions that work with any type
- Classes that can store any type of data
- Interfaces & Type that can be implemented by any type

---

## Generic Functions

```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

---

## Generic Interfaces & Types

```typescript
interface GenericIdentityFn {
  <T>(arg: T): T;
}

type GenericIdentityType = <T>(arg: T) => T;
```

---

## Generic Classes

```typescript
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
```

---

## Summary

- Generics make your code flexible and reusable
- Use generics in functions, classes, and interfaces

---

## Ready for the Project?

Let's build a Cashier Application using TypeScript!

---
