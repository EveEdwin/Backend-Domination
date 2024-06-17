// Variables

// In JavaScript, a variable is a named container that stores data values. Variables are fundamental to programming because they allow you to store, retrieve, and manipulate data. Here’s an overview of the concept of variables in JavaScript:

// ### Declaring Variables

// You can declare a variable using three keywords: `var`, `let`, and `const`.

// - **`var`**: This keyword was used traditionally and has function-level scope. Variables declared with `var` can be redeclared and updated within their scope.

//   ```javascript
//   var name = "John";
//   var age = 25;
//   ```

// - **`let`**: Introduced in ES6, `let` has block-level scope. Variables declared with `let` can be updated but not redeclared within the same scope.

//   ```javascript
//   let name = "John";
//   name = "Doe";  // This is allowed
//   // let name = "Jane";  // This would cause an error
//   ```

// - **`const`**: Also introduced in ES6, `const` is used to declare variables that are block-scoped and cannot be updated or redeclared. It’s used for constants, meaning their value cannot change.

//   ```javascript
//   const name = "John";
//   // name = "Doe";  // This would cause an error
//   ```

// ### Variable Scope

// - **Global Scope**: A variable declared outside any function or block has a global scope. It can be accessed from anywhere in the code.

//   ```javascript
//   var globalVar = "I am global";

//   function test() {
//     console.log(globalVar);  // Accessible here
//   }

//   test();
//   console.log(globalVar);  // Accessible here as well
//   ```

// - **Function Scope**: Variables declared within a function using `var` have function scope. They are not accessible outside the function.

//   ```javascript
//   function test() {
//     var functionVar = "I am in a function";
//     console.log(functionVar);  // Accessible here
//   }

//   test();
//   // console.log(functionVar);  // This would cause an error
//   ```

// - **Block Scope**: Variables declared with `let` or `const` inside a block (e.g., inside curly braces `{}`) have block scope. They are only accessible within that block.

//   ```javascript
//   if (true) {
//     let blockVar = "I am in a block";
//     console.log(blockVar);  // Accessible here
//   }

//   console.log(blockVar);  // This would cause an error
//   ```

// ### Variable Hoisting

// In JavaScript, variable declarations (but not initializations) are hoisted to the top of their scope. This means you can use a variable before it’s declared, but it will be `undefined`.

// ```javascript
// console.log(hoistedVar);  // undefined
// var hoistedVar = "I am hoisted";
// ```

// With `let` and `const`, hoisting still occurs, but the variables are not initialized and accessing them before the declaration will result in a `ReferenceError`.

// ```javascript
// // console.log(hoistedLet);  // This would cause a ReferenceError
// let hoistedLet = "I am not accessible before this line";
// ```

// ### Conclusion

// Variables in JavaScript are essential for storing and manipulating data. Understanding the differences between `var`, `let`, and `const`, along with their respective scopes and behavior, is crucial for writing effective and bug-free code.

//   function test() {
//     var functionVar = "I am in a function";
//     console.log(functionVar);  // Accessible here
//   }

//   test();
// console.log(functionVar);  // This would cause an error

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Data Types

// In JavaScript, data types can be broadly categorized into two types: primitive data types and reference data types. Understanding these distinctions is fundamental to mastering JavaScript.

// ### Primitive Data Types

// Primitive data types are the most basic kinds of data. They are immutable, meaning that their value cannot be changed once assigned. JavaScript has seven primitive data types:

// 1. **Number**: Represents both integer and floating-point numbers.
//    ```javascript
//    let age = 25;
//    let pi = 3.14;
//    ```

// 2. **String**: Represents sequences of characters.
//    ```javascript
//    let name = "John";
//    ```

// 3. **Boolean**: Represents logical values, either `true` or `false`.
//    ```javascript
//    let isStudent = true;
//    ```

// 4. **Undefined**: Represents a variable that has been declared but not yet assigned a value.
//    ```javascript
//    let notAssigned;
//    console.log(notAssigned);  // undefined
//    ```

// 5. **Null**: Represents the intentional absence of any object value.
//    ```javascript
//    let emptyValue = null;
//    ```

// 6. **Symbol**: Represents a unique and immutable value often used as object keys.
//    ```javascript
//    let symbol1 = Symbol('description');
//    ```

// 7. **BigInt**: Represents integers with arbitrary precision.
//    ```javascript
//    let bigIntValue = BigInt(1234567890123456789012345678901234567890n);
//    ```

// ### Reference Data Types

// Reference data types are more complex. They can hold multiple values and are mutable. When you create a reference type, you are actually creating a reference to a location in memory where the data is stored. JavaScript has primarily three reference data types:

// 1. **Object**: A collection of key-value pairs. Objects can store properties and methods.
//    ```javascript
//    let person = {
//      name: "John",
//      age: 25
//    };
//    ```

// 2. **Array**: A special type of object for storing ordered collections of values.
//    ```javascript
//    let fruits = ["Apple", "Banana", "Cherry"];
//    ```

// 3. **Function**: A block of code designed to perform a particular task.
//    ```javascript
//    function greet() {
//      console.log("Hello!");
//    }
//    ```

// ### Key Differences Between Primitive and Reference Types

// 1. **Immutability vs. Mutability**:
//    - **Primitive Types**: Immutable. Once a primitive value is assigned, it cannot be changed. Any operation on a primitive value results in a new value.
//    - **Reference Types**: Mutable. You can change the contents of an object or array after it's created.

// 2. **Memory Allocation**:
//    - **Primitive Types**: Stored directly in the location that the variable accesses. This means the actual value is stored in the variable.
//    - **Reference Types**: Stored in heap memory. The variable stores a reference (memory address) to the actual object in the heap.

// 3. **Copying Behavior**:
//    - **Primitive Types**: When you copy a primitive value, you copy the actual value.
//      ```javascript
//      let a = 10;
//      let b = a;
//      b = 20;
//      console.log(a);  // 10 (unchanged)
//      ```
//    - **Reference Types**: When you copy a reference value, you copy the reference to the object, not the object itself. Both variables point to the same object.
//      ```javascript
//      let obj1 = { name: "John" };
//      let obj2 = obj1;
//      obj2.name = "Doe";
//      console.log(obj1.name);  // "Doe" (changed)
//      ```

// ### Conclusion

// Primitive and reference data types in JavaScript are fundamental concepts that determine how data is stored, accessed, and manipulated. Primitive types are simple and immutable, while reference types are complex and mutable, with significant differences in memory allocation and behavior when copied or assigned. Understanding these distinctions is crucial for effective JavaScript programming.

////////////////////////////////////////////////////////////////////
// Operators

// Operators in JavaScript are symbols or keywords used to perform operations on operands (values or variables). They can be classified into several categories based on their functionality:

// ### 1. Arithmetic Operators

// Arithmetic operators are used to perform mathematical calculations.

// - **Addition (`+`)**: Adds two operands.
//   ```javascript
//   let sum = 10 + 5;  // 15
//   ```

// - **Subtraction (`-`)**: Subtracts the second operand from the first.
//   ```javascript
//   let difference = 10 - 5;  // 5
//   ```

// - **Multiplication (`*`)**: Multiplies two operands.
//   ```javascript
//   let product = 10 * 5;  // 50
//   ```

// - **Division (`/`)**: Divides the first operand by the second.
//   ```javascript
//   let quotient = 10 / 5;  // 2
//   ```

// - **Modulus (`%`)**: Returns the remainder of division of the first operand by the second.
//   ```javascript
//   let remainder = 10 % 3;  // 1
//   ```

// - **Exponentiation (`**`)**: Raises the first operand to the power of the second operand.
//   ```javascript
//   let power = 2 ** 3;  // 8
//   ```

// ### 2. Assignment Operators

// Assignment operators assign values to variables.

// - **Assignment (`=`)**: Assigns the right operand's value to the left operand.
//   ```javascript
//   let x = 10;
//   ```

// - **Addition Assignment (`+=`)**: Adds the right operand to the left operand and assigns the result to the left operand.
//   ```javascript
//   let x = 10;
//   x += 5;  // x = 15
//   ```

// - **Subtraction Assignment (`-=`)**: Subtracts the right operand from the left operand and assigns the result to the left operand.
//   ```javascript
//   let x = 10;
//   x -= 5;  // x = 5
//   ```

// - **Multiplication Assignment (`*=`)**: Multiplies the left operand by the right operand and assigns the result to the left operand.
//   ```javascript
//   let x = 10;
//   x *= 5;  // x = 50
//   ```

// - **Division Assignment (`/=`)**: Divides the left operand by the right operand and assigns the result to the left operand.
//   ```javascript
//   let x = 10;
//   x /= 5;  // x = 2
//   ```

// - **Modulus Assignment (`%=`)**: Takes the modulus of the left operand by the right operand and assigns the result to the left operand.
//   ```javascript
//   let x = 10;
//   x %= 3;  // x = 1
//   ```

// ### 3. Comparison Operators

// Comparison operators compare two operands and return a boolean value.

// - **Equal (`==`)**: Returns `true` if the operands are equal.
//   ```javascript
//   10 == "10";  // true
//   ```

// - **Strict Equal (`===`)**: Returns `true` if the operands are equal and of the same type.
//   ```javascript
//   10 === "10";  // false
//   ```

// - **Not Equal (`!=`)**: Returns `true` if the operands are not equal.
//   ```javascript
//   10 != "10";  // false
//   ```

// - **Strict Not Equal (`!==`)**: Returns `true` if the operands are not equal or not of the same type.
//   ```javascript
//   10 !== "10";  // true
//   ```

// - **Greater Than (`>`)**: Returns `true` if the left operand is greater than the right operand.
//   ```javascript
//   10 > 5;  // true
//   ```

// - **Less Than (`<`)**: Returns `true` if the left operand is less than the right operand.
//   ```javascript
//   10 < 5;  // false
//   ```

// - **Greater Than or Equal (`>=`)**: Returns `true` if the left operand is greater than or equal to the right operand.
//   ```javascript
//   10 >= 10;  // true
//   ```

// - **Less Than or Equal (`<=`)**: Returns `true` if the left operand is less than or equal to the right operand.
//   ```javascript
//   10 <= 10;  // true
//   ```

// ### 4. Logical Operators

// Logical operators are used to combine multiple conditions.

// - **Logical AND (`&&`)**: Returns `true` if both operands are true.
//   ```javascript
//   true && false;  // false
//   ```

// - **Logical OR (`||`)**: Returns `true` if at least one of the operands is true.
//   ```javascript
//   true || false;  // true
//   ```

// - **Logical NOT (`!`)**: Returns `true` if the operand is false.
//   ```javascript
//   !true;  // false
//   ```

// ### 5. Bitwise Operators

// Bitwise operators perform operations on the binary representations of numbers.

// - **AND (`&`)**: Performs a bitwise AND operation.
//   ```javascript
//   5 & 1;  // 1 (0101 & 0001 = 0001)
//   ```

// - **OR (`|`)**: Performs a bitwise OR operation.
//   ```javascript
//   5 | 1;  // 5 (0101 | 0001 = 0101)
//   ```

// - **NOT (`~`)**: Performs a bitwise NOT operation.
//   ```javascript
//   ~5;  // -6 (~0101 = 1010)
//   ```

// - **XOR (`^`)**: Performs a bitwise XOR operation.
//   ```javascript
//   5 ^ 1;  // 4 (0101 ^ 0001 = 0100)
//   ```

// - **Left Shift (`<<`)**: Shifts bits to the left.
//   ```javascript
//   5 << 1;  // 10 (0101 << 1 = 1010)
//   ```

// - **Right Shift (`>>`)**: Shifts bits to the right.
//   ```javascript
//   5 >> 1;  // 2 (0101 >> 1 = 0010)
//   ```

// ### 6. String Operators

// String operators are used to manipulate text strings.

// - **Concatenation (`+`)**: Combines two strings.
//   ```javascript
//   let greeting = "Hello, " + "world!";  // "Hello, world!"
//   ```

// - **Concatenation Assignment (`+=`)**: Appends a string to another string.
//   ```javascript
//   let text = "Hello";
//   text += ", world!";  // "Hello, world!"
//   ```

// ### 7. Ternary Operator

// The ternary operator is a shorthand for an `if-else` statement.

// - **Ternary (`? :`)**: Evaluates a condition and returns one of two values based on whether the condition is true or false.
//   ```javascript
//   let age = 18;
//   let status = (age >= 18) ? "adult" : "minor";  // "adult"
//   ```

// ### 8. Type Operators

// Type operators are used to determine the type of a variable.

// - **typeof**: Returns a string indicating the type of the operand.
//   ```javascript
//   typeof 123;  // "number"
//   ```

// - **instanceof**: Checks if an object is an instance of a particular class.
//   ```javascript
//   let date = new Date();
//   date instanceof Date;  // true
//   ```

// ### Conclusion

// Operators in JavaScript are essential tools for performing operations on values and variables. They enable a wide range of functionalities, from basic arithmetic and assignment to more complex logical and bitwise operations. Understanding these operators is crucial for effective programming in JavaScript.

//////////////////////////////////////////////////////////////

// Loops

// Loops in JavaScript are used to repeatedly execute a block of code as long as a specified condition is true. There are several types of loops in JavaScript, each suited for different scenarios:

// ### 1. `for` Loop

// The `for` loop is commonly used when the number of iterations is known before entering the loop. It consists of three parts: initialization, condition, and increment/decrement.

// ```javascript
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// // Output: 0 1 2 3 4
// ```

// ### 2. `while` Loop

// The `while` loop is used when the number of iterations is not known in advance. It continues to execute the block of code as long as the specified condition is true.

// ```javascript
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
// // Output: 0 1 2 3 4
// ```

// ### 3. `do...while` Loop

// The `do...while` loop is similar to the `while` loop, but it guarantees that the block of code will be executed at least once, even if the condition is false from the beginning.

// ```javascript
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);
// // Output: 0 1 2 3 4
// ```

// ### 4. `for...in` Loop

// The `for...in` loop is used to iterate over the properties of an object. It goes through each enumerable property of the object.

// ```javascript
// let person = { name: "John", age: 25, city: "New York" };
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }
// // Output:
// // name: John
// // age: 25
// // city: New York
// ```

// ### 5. `for...of` Loop

// The `for...of` loop is used to iterate over iterable objects (like arrays, strings, maps, sets, etc.). It iterates over the values of the iterable object.

// ```javascript
// let numbers = [10, 20, 30, 40, 50];
// for (let num of numbers) {
//   console.log(num);
// }
// // Output: 10 20 30 40 50
// ```

// ### Breaking and Continuing Loops

// - **`break`**: Terminates the loop entirely.
//   ```javascript
//   for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//       break;
//     }
//     console.log(i);
//   }
//   // Output: 0 1 2 3 4
//   ```

// - **`continue`**: Skips the current iteration and proceeds to the next iteration of the loop.
//   ```javascript
//   for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//       continue;
//     }
//     console.log(i);
//   }
//   // Output: 0 1 2 3 4 6 7 8 9
//   ```

// ### Nested Loops

// Loops can be nested inside other loops, allowing you to perform more complex iterations.

// ```javascript
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log(`i = ${i}, j = ${j}`);
//   }
// }
// // Output:
// // i = 0, j = 0
// // i = 0, j = 1
// // i = 0, j = 2
// // i = 1, j = 0
// // i = 1, j = 1
// // i = 1, j = 2
// // i = 2, j = 0
// // i = 2, j = 1
// // i = 2, j = 2
// ```

// ### Conclusion

// Loops in JavaScript are powerful constructs that allow you to execute a block of code multiple times. Whether you're iterating over arrays, objects, or performing repeated tasks, understanding the various loop constructs—`for`, `while`, `do...while`, `for...in`, and `for...of`—is essential for effective programming. Each loop type has its specific use cases, and knowing when to use each one can help you write more efficient and readable code.

// TYPE OF FUNCTION

// Functions in JavaScript are blocks of code designed to perform a particular task. They can be reused multiple times with different inputs, making your code more modular, readable, and maintainable. Here’s an overview of how functions work in JavaScript:

// ### 1. Function Declaration

// A function declaration defines a named function.

// ```javascript
// function greet(name) {
//   console.log("Hello, " + name + "!");
// }

// greet("Alice");  // Output: "Hello, Alice!"
// ```

// ### 2. Function Expression

// A function expression defines a function as part of a larger expression, typically assigning it to a variable.

// ```javascript
// const greet = function(name) {
//   console.log("Hello, " + name + "!");
// };

// greet("Bob");  // Output: "Hello, Bob!"
// ```

// ### 3. Arrow Function

// Arrow functions provide a shorter syntax and lexical `this` binding. They are often used for concise, anonymous function expressions.

// ```javascript
// const greet = (name) => {
//   console.log("Hello, " + name + "!");
// };

// greet("Charlie");  // Output: "Hello, Charlie!"
// ```

// If the function has only one parameter and a single statement, you can omit the parentheses and curly braces:

// ```javascript
// const greet = name => console.log("Hello, " + name + "!");

// greet("Dave");  // Output: "Hello, Dave!"
// ```

// ### 4. Function Parameters and Arguments

// Functions can take parameters (inputs) and return values (outputs).

// ```javascript
// function add(a, b) {
//   return a + b;
// }

// let result = add(3, 4);  // 7
// console.log(result);
// ```

// ### 5. Default Parameters

// You can set default values for function parameters, which will be used if no arguments are provided.

// ```javascript
// function greet(name = "Guest") {
//   console.log("Hello, " + name + "!");
// }

// greet();        // Output: "Hello, Guest!"
// greet("Eve");   // Output: "Hello, Eve!"
// ```

// ### 6. Rest Parameters

// Rest parameters allow you to pass an indefinite number of arguments as an array.

// ```javascript
// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3));        // 6
// console.log(sum(4, 5, 6, 7, 8));  // 30
// ```

// ### 7. Anonymous Functions

// Anonymous functions are functions without a name. They are often used as arguments to other functions or assigned to variables.

// ```javascript
// setTimeout(function() {
//   console.log("This runs after 2 seconds");
// }, 2000);
// ```

// ### 8. Immediately Invoked Function Expressions (IIFE)

// An IIFE is a function that is executed immediately after it is defined.

// ```javascript
// (function() {
//   console.log("This function runs immediately!");
// })();
// ```

// ### 9. Higher-Order Functions

// Higher-order functions are functions that take other functions as arguments or return functions as their result.

// ```javascript
// function createGreeter(greeting) {
//   return function(name) {
//     console.log(greeting + ", " + name + "!");
//   };
// }

// const sayHello = createGreeter("Hello");
// sayHello("Frank");  // Output: "Hello, Frank!"

// const sayHi = createGreeter("Hi");
// sayHi("Grace");     // Output: "Hi, Grace!"
// ```

// ### 10. Function Scope and Closures

// Functions create their own scope. Variables declared within a function are not accessible outside of it. Closures are functions that have access to variables from another function’s scope.

// ```javascript
// function outer() {
//   let outerVar = "I'm outside!";

//   function inner() {
//     console.log(outerVar);
//   }

//   return inner;
// }

// const innerFunc = outer();
// innerFunc();  // Output: "I'm outside!"
// ```

// ### 11. The `this` Keyword

// The `this` keyword refers to the context in which a function is called.

// ```javascript
// const person = {
//   name: "Hank",
//   greet: function() {
//     console.log("Hello, " + this.name);
//   }
// };

// person.greet();  // Output: "Hello, Hank"
// ```

// In arrow functions, `this` retains the value from the enclosing context:

// ```javascript
// const person = {
//   name: "Ivy",
//   greet: () => {
//     console.log("Hello, " + this.name);  // Arrow function doesn't have its own `this`
//   }
// };

// person.greet();  // Output: "Hello, undefined"
// ```

// ### Conclusion

// Functions are a cornerstone of JavaScript programming, enabling you to write modular, reusable, and maintainable code. Whether you’re using function declarations, expressions, arrow functions, or higher-order functions, understanding how to effectively use and manipulate functions will greatly enhance your ability to develop robust JavaScript applications.


/////////////////////////////////////////////////////
// Callback Function

// A callback is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are commonly used to handle asynchronous operations such as reading files, making network requests, or interacting with user interfaces.

// ### Synchronous Callbacks

// Even though callbacks are most commonly associated with asynchronous operations, they can also be used in synchronous code. Here’s an example of a synchronous callback:

// ```javascript
// function greet(name) {
//   console.log("Hello, " + name + "!");
// }

// function processUserInput(callback) {
//   let name = "Alice";
//   callback(name);
// }

// processUserInput(greet);
// // Output: "Hello, Alice!"
// ```

// ### Asynchronous Callbacks

// Asynchronous callbacks are used for operations that take time to complete, like reading a file, making an HTTP request, or setting a timer.

// #### Example with `setTimeout`

// The `setTimeout` function takes a callback function and a delay in milliseconds. The callback function is executed after the delay.

// ```javascript
// console.log("Start");

// setTimeout(() => {
//   console.log("Callback executed after 2 seconds");
// }, 2000);

// console.log("End");

// // Output:
// // Start
// // End
// // Callback executed after 2 seconds
// ```

// #### Example with an Event Listener

// Event listeners are another common use case for callbacks.

// ```javascript
// document.getElementById("myButton").addEventListener("click", function() {
//   console.log("Button was clicked!");
// });
// ```

// ### Callbacks in Asynchronous Programming (e.g., AJAX)

// Callbacks are essential in handling asynchronous operations, such as making HTTP requests with AJAX.

// ```javascript
// function fetchData(callback) {
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://api.example.com/data", true);
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       callback(JSON.parse(xhr.responseText));
//     }
//   };
//   xhr.send();
// }

// fetchData(function(data) {
//   console.log(data);
// });
// ```

// ### Callback Hell

// When multiple asynchronous operations are nested inside callbacks, it can lead to deeply nested code, often referred to as "callback hell."

// ```javascript
// doFirstTask(function(result1) {
//   doSecondTask(result1, function(result2) {
//     doThirdTask(result2, function(result3) {
//       console.log(result3);
//     });
//   });
// });
// ```

// ### Avoiding Callback Hell with Promises

// To avoid callback hell, you can use Promises, which allow you to chain asynchronous operations more cleanly.

// ```javascript
// doFirstTask()
//   .then(result1 => doSecondTask(result1))
//   .then(result2 => doThirdTask(result2))
//   .then(result3 => {
//     console.log(result3);
//   })
//   .catch(error => {
//     console.error(error);
//   });
// ```

// ### Conclusion

// Callbacks are a fundamental concept in JavaScript, enabling you to handle asynchronous operations effectively. While they can lead to complex code structures when overused or improperly managed (callback hell), modern JavaScript provides alternatives like Promises and async/await to handle asynchronous operations more elegantly. Understanding how to use callbacks correctly is crucial for writing efficient and maintainable JavaScript code.

//////////////////////////////////////////////////////////

// Promise

// Promises in JavaScript are a way to handle asynchronous operations in a more manageable and cleaner manner compared to traditional callback functions. They represent a value that may be available now, or in the future, or never.

// ### Basic Concept

// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise can be in one of three states:

// 1. **Pending**: The initial state, neither fulfilled nor rejected.
// 2. **Fulfilled**: The operation completed successfully.
// 3. **Rejected**: The operation failed.

// ### Creating a Promise

// You can create a Promise using the `Promise` constructor, which takes a function (executor) with two parameters: `resolve` and `reject`. `resolve` is called when the asynchronous operation completes successfully, and `reject` is called when it fails.

// ```javascript
// const myPromise = new Promise((resolve, reject) => {
//   let condition = true;

//   if (condition) {
//     resolve("The operation was successful!");
//   } else {
//     reject("The operation failed.");
//   }
// });
// ```

// ### Using Promises

// You can handle the result of a Promise using the `then` method for fulfilled promises and the `catch` method for rejected promises.

// ```javascript
// myPromise
//   .then((message) => {
//     console.log(message);  // Output: "The operation was successful!"
//   })
//   .catch((error) => {
//     console.log(error);  // This will not run because the condition is true
//   });
// ```

// ### Chaining Promises

// Promises can be chained to handle a sequence of asynchronous operations. Each `then` returns a new Promise, allowing chaining.

// ```javascript
// const myPromise = new Promise((resolve, reject) => {
//   resolve(10);
// });

// myPromise
//   .then((number) => {
//     console.log(number);  // Output: 10
//     return number * 2;
//   })
//   .then((number) => {
//     console.log(number);  // Output: 20
//     return number * 3;
//   })
//   .then((number) => {
//     console.log(number);  // Output: 60
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// ```

// ### Handling Errors

// Errors in the chain can be caught using the `catch` method. This allows you to handle errors in a single place.

// ```javascript
// const myPromise = new Promise((resolve, reject) => {
//   resolve(10);
// });

// myPromise
//   .then((number) => {
//     console.log(number);  // Output: 10
//     return number * 2;
//   })
//   .then((number) => {
//     throw new Error("Something went wrong!");  // Trigger an error
//   })
//   .then((number) => {
//     console.log(number);  // This will not run
//   })
//   .catch((error) => {
//     console.error(error.message);  // Output: "Something went wrong!"
//   });
// ```

// ### `Promise.all`

// The `Promise.all` method takes an array of promises and returns a new Promise that resolves when all the promises in the array have resolved or rejects if any promise rejects.

// ```javascript
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);  // Output: [3, 42, "foo"]
// });
// ```

// ### `Promise.race`

// The `Promise.race` method returns a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.

// ```javascript
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "one");
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "two");
// });

// Promise.race([promise1, promise2]).then((value) => {
//   console.log(value);  // Output: "two"
// });
// ```

// ### `async` and `await`

// `async` and `await` are syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code.

// ```javascript
// async function fetchData() {
//   try {
//     let response = await fetch("https://api.example.com/data");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// fetchData();
// ```

// ### Conclusion

// Promises in JavaScript provide a powerful and flexible way to handle asynchronous operations. They help avoid callback hell and make the code more readable and maintainable. Understanding how to create, use, chain, and handle errors with Promises is essential for modern JavaScript development. Additionally, `async` and `await` further simplify working with Promises, making asynchronous code easier to write and understand.

