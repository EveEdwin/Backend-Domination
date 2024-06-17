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

// Operators

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