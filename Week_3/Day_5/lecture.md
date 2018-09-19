# Lecture: SASS (Syntactically Awesome Style-Sheets)

SASS is a "preprocessor".  It's a piece of code that runs through SASS code and converts it to CSS to be served to the browser.  Preprocessors can provide features that the original language didn't have, but maintain compatability.  (Babel is a similar approach to converting ES6 to ES5.)

## Why SASS?
Combines multiple CSS files so that you only need one include at the top of the HTML file.

- **Variables**: SCSS (a version of SASS) can use variables directly in CSS.
- **Nesting**: Rather than trying to remember the hierarchy of rules dictated in the HTML, you can nest them for better organization in the SCSS script.  **SUPER-handy.**
- **Partials**: Split SASS files into smaller style sheets to modularize aspects of the styling, and then import them into one CSS for runtime.
- **Mixins**: These are effectively functions.
- **Extends**: Import pre-built blocks of styles into other styles.
- **Operators**: You can use math operators and variables for values.

## Responsive design:
Thinking about our layout in a way that can be designed on more than one screen size.
Idea of "viewport": you're looking through a porthole (the screen) at larger content (the full webpage).
- Set width of page to the width of the device's screen: `width=device-width`
- Include `initial-scale=1` to establish a 1:1 relationship between CSS pixels and device-independent pixels.  You can also set `minimum-scale` and `maximum-scale` or `user-scalable` to determine the flexibility/control you're providing.
- Use percentage widths rather than fixed widths.