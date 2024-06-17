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