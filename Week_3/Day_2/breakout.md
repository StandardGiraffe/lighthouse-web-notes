# Breakout: A friendly but fast introduction to jQuery

## What is jQuery, and why did it become so popular
- Early 2006, we want to build a website with client interactivity and make it cross-browser compatible (you'd need to load in extra libraries, check to see if various browsers need modules to replace incompatable ones, etc.)
- jQuery was a library that would be cross-compatible, as well as providing a convenient shorthand for common code for client-side applicaitons.
- "Syntactic sugar" - making it nicer to type.
- Tons of jQuery plugins, which makes it good to teach and use.

jQuery doesn't add more functionality than what JavaScript in the browser can already do---it makes it easier/faster/cross-browser compatible.

### Library vs Framework:
- Framework is a set of tools that expect to be used in a particular way to achieve something it was designed for.
- Library contains easier ways to access existing functionality.  jQuery is a **library**.

`$ === jQuery()`

jQueryUI is a collection of pre-built application components (like dropdowns, accordian menus).

It's common to say that jQuery is dead, largely because the language/syntax and cross-browser compatability has caught up.  jQuery is less necessary, and newer problems are being solved by newer libraries and frameworks.  Currently about 70% of the most popular websites are using jQuery.

Stosh showed us a website called [You Might Not Need jQuery](youmightnotneedjquery.com), which showed examples of certain applications/goals and the comparative script you'd need to achieve them.

`this` vs `$(this)`: passing the event object through jQuery in this way gives back a "super-DOM object": it's the same as before, but with a bunch of jQuery handy methods attached that can now be called.  You lose no functionality by converting it this way.

If you name a jQuery event object as a variable, the convention is to put a $ in front of it to signify that it can use jQuery methods. Eg. `$button = $(this)` or `button = this`.

Talked about DOM traversal with .siblings and .closest.  The best practice is to attempt the fewest checks (something for which you'd need to know the relevant HTML structure.)

### When to use jQuery vs CSS
Generally, if an animation etc. could be accomplished with jQuery or CSS, be consistent so you only need to look in one place/debug one language.  Otherwise, generally pick CSS, as jQuery executions are competing with other JavaScript executions, while CSS is being processed independently by the graphics processor.  Plus, separation of concerns.

Ajax can help us load additional resources over the network after the DOM has loaded by appending to it.  (This is how infinite scroll works on Facebook.)