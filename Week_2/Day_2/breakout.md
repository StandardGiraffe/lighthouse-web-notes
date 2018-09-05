# Breakout: ES6 (Modern JavaScript)

## History of JavaScript
JS was written in ten days, May 1995.

Plain HTML (static) -> CSS (styling) -> JavaScript (interactivity with user)

Became extremely popular, so they submitted it to ECMA International in order to create a standard.  Each standard released was an EC spec (ECMAScript, formally, not JavaScript).

## Transpiling and Polyfills

Write ES6, run it through a **transpiler** (like Babel), which turns it into more reliably runnable ES5.

Polyfills: if you like a subset of features from a newer version of ESScript, you can load a polyfill library.  At run, it'll check to see if the browser can run the new features; if not, the library will replace those features with older ones (filling the holes).

## Features of ES5

### "use strict"; (Strict Mode)
Interpreter directive that tells the interpreter to throw errors for code that technically works, but is undesirable due to best practices.

To enable, have the first line of the file read:
```
"use strict";
```
It can be used at the top of a function in order to strict-mode smaller pieces of code (usually because they're being gradually cleaned up, but we don't want to break everything and fix everything at once).

## Features of ES6
`let` and `const` are block-scoped (between braces) rather than lexically-scoped.

`const` creates a variable which cannot be reassigned, though the object it's pointing at may change.  (If it's pointed at a primative, it probably won't be changed.)

