# Lecture: Callbacks

REPL: Read, Evaluate, Print, Loop

Callback is a function that will run after something else is done.  Recall that JavaScript will not always do everything in the order written: if something that will take time is reached, the read sets it aside for later.  This is _asynchronous_ operation.

The important takeaway at this point is that a function is a variable.

A callback function is using a function declaration outside and saving it as a variable and using it as an argument itself. - Patrick

Callbacks are useful because when fetching scripts from the Internet, we don't know how long it'll take.
- Query a website for information; when it arrives do something with it, but don't hold up everything else in the meantime.

[Blender analogy](s3.fzero.ca/stuff/foodproc.jpg)

A callback SEEMS to be when one function calls another function.  This is making more sense.

###Anonymous functions
Writing a whole new function (usually as `function() {...}`) as an argument into another function.  It's okay for custom situations, but if you're likely to need the functionality multiple times, spin it out into its own function and just call that as the argument (making it a callback).

Because JavaScript was built for browsers and expects to spend most of its time listening for inputs from users, it has _listeners_  `document.addEventListener("click", console.log)`.  In this case, console.log is the callback function (recall, we don't need parentheses after it).  _This is one of the main reasons callbacks exist: to create easy triggers for events that happen in ways that aren't known ahead of time_.