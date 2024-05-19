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
