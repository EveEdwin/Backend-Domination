Operators

Operators in JavaScript are symbols or keywords used to perform operations on operands (values or variables). They can be classified into several categories based on their functionality:

### 1. Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations.

- **Addition (`+`)**: Adds two operands.
  ```javascript
  let sum = 10 + 5;  // 15
  ```

- **Subtraction (`-`)**: Subtracts the second operand from the first.
  ```javascript
  let difference = 10 - 5;  // 5
  ```

- **Multiplication (`*`)**: Multiplies two operands.
  ```javascript
  let product = 10 * 5;  // 50
  ```

- **Division (`/`)**: Divides the first operand by the second.
  ```javascript
  let quotient = 10 / 5;  // 2
  ```

- **Modulus (`%`)**: Returns the remainder of division of the first operand by the second.
  ```javascript
  let remainder = 10 % 3;  // 1
  ```

- **Exponentiation (`**`)**: Raises the first operand to the power of the second operand.
  ```javascript
  let power = 2 ** 3;  // 8
  ```

### 2. Assignment Operators

Assignment operators assign values to variables.

- **Assignment (`=`)**: Assigns the right operand's value to the left operand.
  ```javascript
  let x = 10;
  ```

- **Addition Assignment (`+=`)**: Adds the right operand to the left operand and assigns the result to the left operand.
  ```javascript
  let x = 10;
  x += 5;  // x = 15
  ```

- **Subtraction Assignment (`-=`)**: Subtracts the right operand from the left operand and assigns the result to the left operand.
  ```javascript
  let x = 10;
  x -= 5;  // x = 5
  ```

- **Multiplication Assignment (`*=`)**: Multiplies the left operand by the right operand and assigns the result to the left operand.
  ```javascript
  let x = 10;
  x *= 5;  // x = 50
  ```

- **Division Assignment (`/=`)**: Divides the left operand by the right operand and assigns the result to the left operand.
  ```javascript
  let x = 10;
  x /= 5;  // x = 2
  ```

- **Modulus Assignment (`%=`)**: Takes the modulus of the left operand by the right operand and assigns the result to the left operand.
  ```javascript
  let x = 10;
  x %= 3;  // x = 1
  ```

### 3. Comparison Operators

Comparison operators compare two operands and return a boolean value.

- **Equal (`==`)**: Returns `true` if the operands are equal.
  ```javascript
  10 == "10";  // true
  ```

- **Strict Equal (`===`)**: Returns `true` if the operands are equal and of the same type.
  ```javascript
  10 === "10";  // false
  ```

- **Not Equal (`!=`)**: Returns `true` if the operands are not equal.
  ```javascript
  10 != "10";  // false
  ```

- **Strict Not Equal (`!==`)**: Returns `true` if the operands are not equal or not of the same type.
  ```javascript
  10 !== "10";  // true
  ```

- **Greater Than (`>`)**: Returns `true` if the left operand is greater than the right operand.
  ```javascript
  10 > 5;  // true
  ```

- **Less Than (`<`)**: Returns `true` if the left operand is less than the right operand.
  ```javascript
  10 < 5;  // false
  ```

- **Greater Than or Equal (`>=`)**: Returns `true` if the left operand is greater than or equal to the right operand.
  ```javascript
  10 >= 10;  // true
  ```

- **Less Than or Equal (`<=`)**: Returns `true` if the left operand is less than or equal to the right operand.
  ```javascript
  10 <= 10;  // true
  ```

### 4. Logical Operators

Logical operators are used to combine multiple conditions.

- **Logical AND (`&&`)**: Returns `true` if both operands are true.
  ```javascript
  true && false;  // false
  ```

- **Logical OR (`||`)**: Returns `true` if at least one of the operands is true.
  ```javascript
  true || false;  // true
  ```

- **Logical NOT (`!`)**: Returns `true` if the operand is false.
  ```javascript
  !true;  // false
  ```

### 5. Bitwise Operators

Bitwise operators perform operations on the binary representations of numbers.

- **AND (`&`)**: Performs a bitwise AND operation.
  ```javascript
  5 & 1;  // 1 (0101 & 0001 = 0001)
  ```

- **OR (`|`)**: Performs a bitwise OR operation.
  ```javascript
  5 | 1;  // 5 (0101 | 0001 = 0101)
  ```

- **NOT (`~`)**: Performs a bitwise NOT operation.
  ```javascript
  ~5;  // -6 (~0101 = 1010)
  ```

- **XOR (`^`)**: Performs a bitwise XOR operation.
  ```javascript
  5 ^ 1;  // 4 (0101 ^ 0001 = 0100)
  ```

- **Left Shift (`<<`)**: Shifts bits to the left.
  ```javascript
  5 << 1;  // 10 (0101 << 1 = 1010)
  ```

- **Right Shift (`>>`)**: Shifts bits to the right.
  ```javascript
  5 >> 1;  // 2 (0101 >> 1 = 0010)
  ```

### 6. String Operators

String operators are used to manipulate text strings.

- **Concatenation (`+`)**: Combines two strings.
  ```javascript
  let greeting = "Hello, " + "world!";  // "Hello, world!"
  ```

- **Concatenation Assignment (`+=`)**: Appends a string to another string.
  ```javascript
  let text = "Hello";
  text += ", world!";  // "Hello, world!"
  ```

### 7. Ternary Operator

The ternary operator is a shorthand for an `if-else` statement.

- **Ternary (`? :`)**: Evaluates a condition and returns one of two values based on whether the condition is true or false.
  ```javascript
  let age = 18;
  let status = (age >= 18) ? "adult" : "minor";  // "adult"
  ```

### 8. Type Operators

Type operators are used to determine the type of a variable.

- **typeof**: Returns a string indicating the type of the operand.
  ```javascript
  typeof 123;  // "number"
  ```

- **instanceof**: Checks if an object is an instance of a particular class.
  ```javascript
  let date = new Date();
  date instanceof Date;  // true
  ```

### Conclusion

Operators in JavaScript are essential tools for performing operations on values and variables. They enable a wide range of functionalities, from basic arithmetic and assignment to more complex logical and bitwise operations. Understanding these operators is crucial for effective programming in JavaScript.