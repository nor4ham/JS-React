# Functions and Scope


### Objectives

*After this lesson, students will be able to:*

- Describe how parameters and arguments relate to functions
- Create and call a function that accepts parameters to solve a problem
- Define and call functions defined in terms of other functions
- Return a value from a function using the return keyword
- Define and call functions with argument-dependent return values
- Determine the scope of local and global variables
  

### Preparation
*Before this lesson, students should be able to:*

- Use conditionals to control program flow
- Differentiate between true, false, 'truth-y', and 'false-y'
- Use Boolean logic (!, &&, ||) to combine and manipulate conditionals


---
<a name="opening"></a>
## Introduction to Functions 

A function is a reusable statement, or a group of reusable statements, that can be called anywhere in the program. This avoids the need to rewrite the same statement over and over. Functions enable the software developer to segment large, unwieldy applications into smaller, more manageable pieces.

A critical component of programming, functions address a key tenet of engineering: Don't Repeat Yourself, or DRY. Our goal is to create programs with as little code as possible, while maintaining complete clarity.

Another important trait of functions is that they are similar to objects or strings. Function can be passed into other functions as an argument, and they can also be used like any other object we've been working with.

---
## Function Declaration 

Before we call, or "use", a function, we must define it. In JavaScript, functions can be defined in several ways. Two common methods are __function declarations__ and __function expressions__.

__Function Declarations:__
```javascript
function speak (words) {
  console.log(words);
}
```

__Function Expressions:__
```javascript
letspeak = function (words) {
  console.log(words);
}
```

While both methods share some similarities, only function declarations define functions that can be used anywhere in the scope where they're defined. In other words, you can call a function that is defined using function declaration before the part of the code where you actually define it:

```javascript
speak('hello, world!')

function speak(words) {
  console.log(words)
}

// DOES NOT RESULT IN ERROR
```

Function expressions, however, must be defined before they are called:

```javascript
speak('hello, world!')

let speak = function (words) {
  console.log(words)
}

// RESULTS IN ERROR:
// TypeError: undefined is not a function
```

#### Function Declaration Syntax

A function declaration always has the following:

* A name
* An optional list of parameters (i.e., the names of arguments to be "passed" into the function, or information the function will use); this is defined by the parenthesis before the opening curly brace
* Statements inside the function (the code executed every time the function is called)

In our example above, the function name is `speak`. The parameter is `words`. (Note: multiple parameters would be indicated by a comma-separated list inside the parentheses, such as `(words, num)`.) And the statement is `console.log(words);`

And this makes up a basic function declaration!

#### Calling Functions

Calling, or invoking, a function executes the code defined inside this function.

But defining and calling a function is different. A function will not be called when it's defined.

You call a function by using parenthesis after the function's name `()`:

```javascript
function hello () {
  console.log("hello there!")
}

hello();

=> hello there!
```

JavaScript functions are often defined as methods on objects. To call a function as a method:

```javascript
let person = {
  name: 'Obama',
  speak: function () {
    console.log('Hello, World!')
  }
}

person.speak()
=> 'Hello, World!'
```
---

## Parameters 

If a function did the same thing every time it was called, it wouldn't be a very powerful codebase. We would also have to write a new function for each new feature in order to enable additional behaviors in our application:

```javascript
// Bad idea...
function helloMark () {
  console.log('hello, Mark');
}

function helloObama () {
  console.log('hello, Obama')
}
```

> __Instructor's Note:__ Ask students why they think writing such specific functions is a bad idea. If no one has an answer, ask what happens to the above program structure if it has 1,000 users. If we have to write 1,000 different functions, is this a scalable and maintainable program?

Parameters remedy this problem by allowing us to call, or invoke, the same function with different values:

```javascript
function sayHello (name) {
  console.log('Hello ' + name);
}

sayHello('Mark');
=> 'Hello Mark'

sayHello('Obama');
=> 'Hello Obama'
```

In this example, the function `sayHello` is declared with one parameter, `name`. To write functions with **more than one parameter**, use a comma-separated list: `(param1, param2, param3, param4)`. In JavaScript, functions can accept up to 255 parameters!

```javascript
function sum(x, y, z) {
  console.log(x + y + z)
}

sum(1, 2, 3);
=> 6
```

JavaScript is a loosely typed language. Therefore, there is no need to specify the data-type (string, number, etc.) of the function's parameters when writing functions. While this reduces the amount of code you must write, it increases the possibility of type errors, when a value is not of the expected data type. This is because in JavaScript, function definitions do not perform type checking on arguments passed into the functions.

>Note: Parameters vs Arguments. Though often used interchangeably, the terms __parameters__ and __arguments__ have different meanings.

__Parameters__ refer to variables defined in the function's declaration; __arguments__ refer to the actual values passed into the function when the function is called. For example:

```javascript
// Parameter
function doSomething (parameter) {
  // does something
}

// Argument
doSomething(argument)
```
---
## The Return Statement 

Sometimes we don't want to print to the console or update the DOM; rather, we want to update a variable or even call another function. This requires a `return` statement. When we return something, it ends the function's execution and "spits out" what we are returning. We can then store this returned value in another variable...

```javascript
function sum (x, y) {
  return x + y;
}

let z = sum(3, 4);
=> 7
```
... or pass it to another function:

```javascript
function sum (x, y) {
  return x + y;
}

function double (z) {
  return z * 2;
}

let num = sum(3, 4)
=> 7
let numDbl = double(num);
=> 14

// This can also be written:
let num = double(sum(3,4));
=> 14
```

Note that the `return` statement will completely stop a function's execution. Any statements following the `return` statement will not be called:

```javascript
function speak (words) {
  return words;

  // The following statements will not run:
  let x = 1;
  let y = 2;
  console.log(x + y)
}
```

By default, JavaScript functions will return an `undefined` value. To test this, use Node to define and run a function __without__ a return value. A `return` value "overwrites" this default value.

---
<a name="introduction1"></a>

## Introduction to Scope 

Scope is the set of variables you have access to. As we learned in the beginning of this class, JavaScript reads from top to bottom. Sometimes, however, we declare variables inside functions (just like arguments), which aren't accessible in other parts of our code. This is the concept of scope.


#### Global Scope

Before you write a line of JavaScript, you're in what we call the `Global Scope`. When a variable is declared outside a function, it is public—referred to as GLOBAL—and has a global scope. Any script or function on the page can then reference this variable.

For example, when you declare a variable right away, it's defined globally:

```javascript
let name = 'Gerry';
```

Global scope can be confusing when you run into namespace clashes. You don't want to use global scoping for all your variables--because using it correctly is highly complex--but every Javascript program uses the global scope in one way or another, so it’s important to be familiar with it.

> Note: If time permits, briefly explain what [namespace](http://www.codeproject.com/Articles/829254/JavaScript-Namespace) means in JavaScript.

#### Local Scope

Conversely, if a variable is declared inside a function, it is referred to as LOCAL, and has a local scope.

A variable with local scope cannot be referenced outside of that function.

---

<a name="codealong4"></a>

## Local and Global Scope Usage

Take a look at the code below:

```javascript
let a = "this is the global scope";
function myFunction() {
  let b = "this variable is defined in the local scope";
}
myFunction();
console.log(b);
```

In this case, the console log will send a reference error because the variable `b` is not accessible outside the scope of the function in which it is defined.

In the logic defined above, the fact that a variable cannot be accessed by the parent scope works only in one way.

A function can access variables of the parent scope. In other words, a function defined in the global scope can access all variables defined in the global scope.

```javascript
// Global Scope
let a = "Hello";

// This function is defined in the global scope
function sayHello(name) {
    return a + " " + name;
}

sayHello("JavaScript");
=> "Hello JavaScript";
```

### Nested Function Scope

When a function is defined inside another function, it is possible to access variables defined in the parent from the child:

```javascript
let a = 1;

function getScore () {
  let b = 2,
  c = 3;

  function add() {
  return a + b + c;
  }

  return add();
}

getScore();
=> 6
```

---

<a name="conclusion"></a>

## Conclusion 

Make sure the lesson objectives have been met.

* Summarize the difference between global and local scope.
* Explain how you define and call functions using arguments.
  
