Loops

Loops in JavaScript are used to repeatedly execute a block of code as long as a specified condition is true. There are several types of loops in JavaScript, each suited for different scenarios:

### 1. `for` Loop

The `for` loop is commonly used when the number of iterations is known before entering the loop. It consists of three parts: initialization, condition, and increment/decrement.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0 1 2 3 4
```

### 2. `while` Loop

The `while` loop is used when the number of iterations is not known in advance. It continues to execute the block of code as long as the specified condition is true.

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// Output: 0 1 2 3 4
```

### 3. `do...while` Loop

The `do...while` loop is similar to the `while` loop, but it guarantees that the block of code will be executed at least once, even if the condition is false from the beginning.

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
// Output: 0 1 2 3 4
```

### 4. `for...in` Loop

The `for...in` loop is used to iterate over the properties of an object. It goes through each enumerable property of the object.

```javascript
let person = { name: "John", age: 25, city: "New York" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 25
// city: New York
```

### 5. `for...of` Loop

The `for...of` loop is used to iterate over iterable objects (like arrays, strings, maps, sets, etc.). It iterates over the values of the iterable object.

```javascript
let numbers = [10, 20, 30, 40, 50];
for (let num of numbers) {
  console.log(num);
}
// Output: 10 20 30 40 50
```

### Breaking and Continuing Loops

- **`break`**: Terminates the loop entirely.
  ```javascript
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
    console.log(i);
  }
  // Output: 0 1 2 3 4
  ```

- **`continue`**: Skips the current iteration and proceeds to the next iteration of the loop.
  ```javascript
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);
  }
  // Output: 0 1 2 3 4 6 7 8 9
  ```

### Nested Loops

Loops can be nested inside other loops, allowing you to perform more complex iterations.

```javascript
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}
// Output:
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
// i = 1, j = 1
// i = 1, j = 2
// i = 2, j = 0
// i = 2, j = 1
// i = 2, j = 2
```

### Conclusion

Loops in JavaScript are powerful constructs that allow you to execute a block of code multiple times. Whether you're iterating over arrays, objects, or performing repeated tasks, understanding the various loop constructs—`for`, `while`, `do...while`, `for...in`, and `for...of`—is essential for effective programming. Each loop type has its specific use cases, and knowing when to use each one can help you write more efficient and readable code.