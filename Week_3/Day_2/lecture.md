# Lecture: The origins of JavaScript

JavaScript is an OLD language: been around for a whlie, and as such there are many versions of it.  There's an organization that manages the evolution of the language (ECMA -> ECMAScript).

Last major upgrade to JavaScript was ECMA6 (2015), with minor annual updates afterwards.  The website that tracks browser adoption: [here](kangax.github.io/compat-table/).

JavaScript was born in the browser, and only later adapted to run headless on a server engine like Node.  Netscape was trying to compete as a browser, and looked at the tiny language included in commercial spreadsheet software.  Brendan Eich developed the first engine that would become JavaScript in ten days to make Netscape more viable. (1995).

Netscape launched an IPO, which was at the time one of the most impressive IPOs Silicon Valley had ever seen.  It made the many folks incredibly rich.

## JavaScript in the Browser

To access JavaScript, just open up the Dev Tools or Inspect interface in Chrome.  (Node started as an attempt to remove the JavaScript engine from needing the browser; the browser remains the natural home of JS.)

### Built-in Global Variables (objects) in the browser

(These don't exist in Node.  Similarly, `process` only exists in Node.)

- `window` Represents the current window.  `window.location.href` will return the current location in the URL bar.  Changing it in the console changes what the browser is actually displaying---it IS the engine that the browser is running.
  - `window.history.back` is clicking the back button
- `navigator.userAgent` returns the software that the browser is running.  `userAgent` is the identity that the browser sends to websites.  Servers would look at that information and serve different content based on believed compatability; browsers started declaring multiple identities that THEY believed they were compatible with to avoid discrimination.
  - `navigator.geolocation.getCurrentPosition(position => {console.log(position)})`
    - Shows that the browser can send your physical location.
- `navigator.getBattery().then(b => {console.log(b.level)}`

The most powerful, though:
- `document` refers to the HTML document
- `document.getElementsByTagName("h1")` returns an array of all of the headings in the current HTML.
  - Alternatively: `document.getElementByID("<ID of a given element>")`
  - Add `.innerText` to get the text content.  **Declare a new value to change it.**

A more generic approach:
`document.querySelector("<target thing>")`

## Quirks to know about event listeners

- Be careful about what you attach your listeners to.  If there's a listener on multiple, nested elements that would fire in response to your event, they propagate up from the most nested qualifying element outwards ("bubbling").

Juan showed us a game built on event listeners to show that we can have many, many event listeners going at once.  We shouldn't worry too much about over-using them, as long as we keep track of what we're using.