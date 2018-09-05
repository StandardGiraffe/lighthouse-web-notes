# Lecture: Web Servers 101

HTTP is one of the main protocols of the web because of its capacity for linking to ANYTHING through hypertext.  Yesterday, we focused on client-side by buiding our own client.  Today, we'll focus on the other side---servers.

ES6 - A JavaScript refresh (2015) introduced some new keywords.

`require("http")` is a library for working wit http

Basic server:
- Something to listen
- Something to respond when a request comes in.

** Listening: `http.createServer(callback (request, return) {})`
Listening portion has a callback in order to facilitate asynchronous communication.  It doesn't know when it it'll be able to fill those criteria (and respond).

Whenever you make changes to the server code, kill it in node and restart it.

## Switching from http library to express library

Express gives us more sophisticated tools.
When we were using "html", we had one listening callback for everything, and sorted what to do with them using ifs.  Express helps with this by creating multiple instances of listeners, expecting specific input.

### Powerful Features

- Middleware `.use`: Creates a catch function that does something when any input is brought in.  You can pipe this to where the input was actually intended to go by ending with `next()`.
- Template engines with .ejs (rather than .html)
  - `<%= [any JavaScript] %>` Runs any JavaScript on the serverside and outputs it to the client, completely hiding the code. ("live updates")
  - Updates to the template files do not require the server to be rebooted ("hot updates").  This is the benefit of separating server and content code.

`express.static(<folder name>)`
