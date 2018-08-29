# Breakout lecture: Reading Code and Scopes in JavaScript
### Lecturer: Stosh

Software engineer in Toronto, currently payment processing, financial technology in general.

## Scope in JavaScript

Focus on functions as values.  "Functions are first class citizens in JavaScript."

Reading code is almost more important than writing it.

Scope: if I define a variable, where can I access that variable?

JavaScript treats functions the same a strings and numbers: they're "primitive" types.

### Declaring Functions

- Declaring a function as an _expression_ (assign a function to a variable: `var add = function(a,b)`.)  These must be assigned before they're called in the script.
- Function _definition/declaration_ (`function subtract(a, b)`).  When used this way, it is _hoisted_, meaning it's read into memory before the script begins to run and can be written anywhere.  There are situations where hoisting makes it difficult to human-read the code.

### Reading Code
Code tends to be read 10 times more than it's written.

(Asynchronous flow: just because line 10 is running doesn't mean line 9 is working.)

Read code to evaluate competing libraries/review security, find bugs, and learn new techniques from masters.

Don't read from top to bottom: read roughly for patterns.  Skim through first for imports and hoisted functions.  High level flow (read as human) vs. execution order (read as computer).

Also, just because you can write code doesn't mean you can read it.


## Scope

Common to all programming languages, but is slightly weird in JavaScript.

Scope defines where variables are accessible.

Variables shouldn't be universal because
- Variable names are limited (to creativity)
- Memory management (we should drop variables we're not using anymore to free memory)
- Bugs bugs

### Block scoping

Blocks of code are denoted with curly braces.  JavaScript is _not_ block-scoped, but can fudge it with `let` and `const`.

JavaScript is _lexically scoped_.  Scopes are defined by defining new functions.  Within a scope, you can look _up_ into parent scopes/functions.  If a variable cannot be resolved within a current scope, it looks up to the next external scope.  This goes onwards until the global (outermost) scope.  If not found there, the program crashes.

(Speaker showed an example of multiple nested blocks of text with naked curly braces and indents, but these were meaningless and didn't affect the value of a repeatedly declared variable.  The variable changed reading top to bottom, as normal.  If JavaScript _was_ block-scoped, this would not have been true.)

Putting functions within other functions (hiding one within the scope of the other) is beneficial as a way of hiding it from the rest of the program until it's needed (so that it's not accidentally called if an identically-named function is written anywhere?)

