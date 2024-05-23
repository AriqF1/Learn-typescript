---
title: Course Typescript Yang Pasti Kepake di Industri
author: Danny Dwi Cahyono
marp: true
size: 16:9
paginate: true
theme: default
transition: slide
header: "Course Typescript Yang Pasti Kepake di Industri"
footer: "© 2024, Danny Dwi Cahyono"
style: |
  header {
    color: #3a7bd5;
    font-size: 30px;
    text-align: center;
  }
  footer {
    color: #3a7bd5;
    font-size: 20px;
    text-align: right;
  }
---

## Course Typescript Yang Pasti Kepake di Industri

![TS_Logo](https://media.dev.to/cdn-cgi/image/width=800,height=400,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fusv4n4x9y62l1k8r18h6.png)

---

## Prerequisites

- Basic knowledge of JavaScript
- Familiarity with programming concepts
- Node.js and npm installed

---

## TypeScript Adoption

- Used by large companies
- Popular in modern web development frameworks
- Growing demand in the job market

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

![Onboard](https://media.giphy.com/media/xT1XGOGdyDrL2BTfxK/giphy.gif?cid=790b7611vejhzc23h3ak3o6sad3nz4sv6vtva9ix7ruecy6x&ep=v1_gifs_search&rid=giphy.gif&ct=g)

---

## Let's Get Started!

![So Excited](https://media.giphy.com/media/IwAZ6dvvvaTtdI8SD5/giphy.gif?cid=790b7611jsf3swgb8kvw8zn9o804d8ht4gsbbpudkp333a6u&ep=v1_gifs_search&rid=giphy.gif&ct=g)

---

## Typescript vs JavaScript

![TypeScript](https://d2ms8rpfqc4h24.cloudfront.net/uploads/2021/12/Understand-Typescript.jpg)

---

## Static vs Dynamic Typing

![Static vs Dynamic Typing](https://miro.medium.com/v2/resize:fit:960/0*NVWU-kfUNJICyhpK.png)

---

## Flow of Code Execution

![Code -> Compile -> Runtime](https://www.baeldung.com/wp-content/uploads/sites/4/2021/10/static_dynamic.drawio.svg)

---

## So what's the point? Why typescript?

- Strongly typed programming language
- Superset of JavaScript
- Enhanced error checking
- Better code maintainability and readability

---

## Let's Practice & Prove it

![Prove It](https://media.giphy.com/media/iIA5YSYuYKdgoedkxU/giphy.gif?cid=790b7611ihovki10rirkl3pa9jr9flvwbmr0tcv9z2hjfbgz&ep=v1_gifs_search&rid=giphy.gif&ct=g)

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

![Just Javascript](https://res.cloudinary.com/dg3gyk0gu/image/upload/w_800,h_600/v1578948516/just-javascript-email-images/jj02/universe.png)

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

Continue to the next section: Non-Primitive Values

![I'm Ready](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzYwMmgxZnJxOWNrcHpjajd6eGpvb2liYnh0YmZ0ZDRzbGd6ZG83dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/UoelmnMc7iOGsQ5HGT/giphy.gif)

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

---

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

![Fly](https://media.giphy.com/media/NTSijhJY9EK3cJlqX1/giphy.gif?cid=790b7611705r3y4yh4p5v74i01o9h4ysmz0pqzonv5upqu3c&ep=v1_gifs_search&rid=giphy.gif&ct=g)

---

## Demo Time!

![Gojo Satoru](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3Zvc2ZpaW83cGs4ZnUwMHJ4Z24zY2k5b3pjYXY1bHJveW42cXFqMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DGsDLr9nyz2LkVgKFs/giphy.gif)

---

## Let's start coding!

![Coding](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWV1YzBxeHM4NWFuN2JpeGVkNmlsNHVobDZ2eXZwZmJpc2RlZnBrcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2IudUHdI075HL02Pkk/giphy.gif)

---

## Setup the Project

- Install the project dependencies:

  ```bash
  npm install --save-dev typescript ts-node esbuild @types/node
  ```

- Initialize the TypeScript configuration:

  ```bash
  tsc --init
  ```

- Update the scripts in `package.json`:

  ```json
  "scripts": {
    "build": "tsc && esbuild src/index.ts --bundle --outfile=dist/bundle.js",
  }
  ```

---

## TS Configuration

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

### Create basic HTML file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Cashier App</title>
  </head>
  <body>
    <h1>Cashier App</h1>
    <p>Please enter the product code and quantity:</p>
    <button id="run">Run The App</button>
    <script src="../dist/bundle.js"></script>
  </body>
</html>
```

---

## Displaying List of Products

- Define the Product Type
- Implement Product Service
  - Create mock data
  - Implement methods to get products

---

## Adding Product to Cart

- Define the Cart Interface
- Implement Cart Service
  - Create a cart attribute
  - Implement methods to add products to the cart

---

## Displaying List of Cart Items

- Implement methods to display cart items

![Cart Illustration](https://t4.ftcdn.net/jpg/04/35/97/43/360_F_435974397_rFGpxTfOolSww3MPhzSM4yAQ6dvXIwQz.jpg)

---

## Implementing the Payment Feature

- Implement the payment method

![Payment Illustration](https://static.vecteezy.com/system/resources/thumbnails/010/009/914/small_2x/financial-management-concept-and-investment-flat-design-of-payment-with-money-cash-banknote-calculator-and-credit-card-illustration-and-banner-template-free-vector.jpg)

---

## Integrating with Product API

- Define the Product API Response Type using Generics
- Fetch products from the API
- Adjust the Cart Service according to the Product API Response

---

## Congratulations!

You have successfully built a Cashier Application using TypeScript!

![Congratulations](https://media.giphy.com/media/xT8qBepJQzUjXpeWU8/giphy.gif?cid=790b7611156f54h3u71fesr8wovzf1m564nmwrge72w3zz5g&ep=v1_gifs_search&rid=giphy.gif&ct=g)

---

## Next Steps:

- Explore more TypeScript features.
- Build more complex applications.
- Practice, practice, practice!

---

## Outro

Thank you for joining this course!

![Thank You](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2llNXI1ZGFuaDJjd2E3bzI2ZmRvZHp4cDN2aW45ZHowczYyeDV5NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZfK4cXKJTTay1Ava29/giphy.gif)

---

## You can find me on:

Feel free to reach out for any questions or feedback.

- [Email](mailto:dannydwicahyono@gmail.com) dannydwicahyono@gmail.com
- [Instagram](https://www.instagram.com/danny_cahyo) @danny_cahyo
- [LinkedIn](https://www.linkedin.com/in/danny-cahyo) Danny Dwi Cahyono
- [Tiktok](https://www.tiktok.com/@dannydwic) @dannydwic
