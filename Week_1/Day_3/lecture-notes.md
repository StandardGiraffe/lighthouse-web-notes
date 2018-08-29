# Lecture Notes: Objects in JavaScript
### Lecturer: David Mills

## Review of JS things

Pramitives/primative values: _things that are just a value_, like
  - strings
  - numbers
  - Boolean
  - Null
  - Undefined
  - Symbols (new)

  You can check the type of something with `typeof`.  But, we saw, this isn't very useful/predictable.

  Objects can have properties (`.length`).  When using `.length` on a string, it temporarily converts it to an object, runs the property.

  When working with _arrays_ we're dealing with an ordered list of elements.  You can read items out by using index positions.  You can assign to index positions, too.

  Objects use strings rather than numbers to index elements.

  In object-oriented programming: classes are blueprints, objects are instances

  Objects are defined with curly brackets, and define pairs - keys with

  ```
  var object = { name: "Danny" }
  object.name >>> "Danny"

  ```
When you assign a new value to an object, if it has a new keyname string, it'll be added to the collection.

If you want to work through

Fibunaci Sequence and using objects as data structures to store values.  Check notes.


You can also store objects within objects (not just primatives).

When we pass primative values into functions, they're copied and not changed.  _However_, when we pass object values to a function, they _can_ be changed.  We looked at examples with arrays and objects being worked on by functions to replace given objects with empty versions and functions to add keys/push elements.


## Context

We can access context through `.this`.

Template literals.  When printing a string, if you use backticks insead of quotationmarks, you can use template literals.

```
return `${this.firstname} ${this.lastname}`
```

Check posted notes for more.  This was tough to follow.
