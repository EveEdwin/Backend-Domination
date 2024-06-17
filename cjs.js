### CommonJS (CJS)

CommonJS is a module system primarily used in Node.js. It allows you to export and import modules using `module.exports` and `require()`.

#### Example of CJS

**Exporting a module:**

```javascript
// math.js
function add(a, b) {
  return a + b;
}

module.exports = {
  add,
};
```

**Importing a module:**

```javascript
// app.js
const math = require('./math');
const result = math.add(2, 3);
console.log(result);  // Output: 5
```

### ECMAScript Modules (ESM)

ECMAScript Modules (ESM) is the standardized module system introduced in ECMAScript 2015 (ES6). It uses `export` and `import` statements and is supported by modern JavaScript environments, including browsers and Node.js (with some configuration).

#### Example of ESM

**Exporting a module:**

```javascript
// math.js
export function add(a, b) {
  return a + b;
}
```

**Importing a module:**

```javascript
// app.js
import { add } from './math.js';
const result = add(2, 3);
console.log(result);  // Output: 5
```

### Key Differences Between CJS and ESM

1. **Syntax:**
   - CJS uses `module.exports` and `require()`.
   - ESM uses `export` and `import`.

2. **Synchronous vs Asynchronous Loading:**
   - CJS modules are loaded synchronously, which works well in server-side environments like Node.js.
   - ESM modules are loaded asynchronously, which is better suited for client-side applications where non-blocking behavior is important.

3. **Scope:**
   - CJS modules are evaluated and cached as soon as they are `require`d.
   - ESM modules have a strict mode scope by default and do not pollute the global scope.

4. **Support:**
   - CJS is the default in Node.js but not natively supported in browsers.
   - ESM is supported by modern browsers and Node.js (since version 12 with the `.mjs` extension or by setting `"type": "module"` in `package.json`).

5. **Circular Dependencies:**
   - CJS handles circular dependencies differently and may return incomplete modules if there are circular references.
   - ESM has a more robust mechanism for dealing with circular dependencies.

### Example Usage in Node.js

**CommonJS:**

```javascript
// package.json
{
  "name": "cjs-example",
  "version": "1.0.0",
  "main": "app.js",
  "type": "commonjs"
}

// app.js
const math = require('./math');
console.log(math.add(2, 3));  // Output: 5
```

**ESM:**

```javascript
// package.json
{
  "name": "esm-example",
  "version": "1.0.0",
  "main": "app.js",
  "type": "module"
}

// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from './math.js';
console.log(add(2, 3));  // Output: 5
```

### Conclusion

Both CommonJS and ECMAScript Modules are essential for modularizing JavaScript code, but they serve different purposes and environments. CommonJS is widely used in Node.js for server-side applications, while ECMAScript Modules are the standard for client-side JavaScript and modern JavaScript development. Understanding both systems and their differences helps in writing modular, maintainable, and efficient JavaScript code.

CJS AND ESM

CJS (CommonJS) and ESM (ECMAScript Modules) are two module systems used in JavaScript to organize and manage code dependencies. They have different syntaxes and behaviors, and understanding their differences is important when working with JavaScript in different environments.