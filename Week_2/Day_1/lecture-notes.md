# Introduction to HTTP

Protocols are systems that know how to interact with eachother based on rules set.

Starts with a URL (uniform resource locator):
* protocol (eg. https)
* (subdomain) Can be used to route
* (domain name) -maps to an ip address using DNS
  * DNS (Domain name system, is like looking up a name in a phonebook and matching it to an abstract phone number)
* (port number; default 80 for http) Like the mailbox---the opening that can be accessed by the outside world.
* path (of files on the server)
* (query) Optional additional information to feed to listeners on the page

URI (uniform resource indicator) is a way of routing information between protocols (like pulling google maps information into an app); click on a slack link which will open your slack APP if you've got it installed.

## Requsting information from a server (like loading a webpage)

1.  Construct a request (your browser does this for you)
  - `curl -v [website]` Makes a GET request to the / path on the website and displays the return (plus the code at the location---likely an html file). `-v` is a _verbose_ request, which will show the header information we want.

`GET` is the most common request sent to a server.  It asks for a _read_ of content from an address.
`POST` indicates that we are _sending_ information to the server, and we want it stored somewhere.  (When we upload an image to URL or click Submit on Compass, it sends a POST request to the server.)

CRUD: Create, Read, Update, Delete -> Typical interactions we'll have with remote servers.

BREAD: Browse (read everything), Read (read one thing), Edit, Add, Delete

## Server Responses

### Response statuses
- Contains a response code and a message
- Reponse codes are organized into series:
  - 100 series = information
  - 200 series = ok
  - 300 series = redirection
  - 400 series = client-side error
  - 500 series = server-side error

### Response Headers
- Content size
- Media type
- ...



## JSONPlaceholder

JSON - JavaScript Object Notation - A way of serializing javascript objects so that they can best as strings and then unpacked at the destination.

Download a plugin to render JSON files readably.

JSON can either be an object or an array.  You can parse serialized object in node with

```
JSON.parse(string) -> deserializes
```

```
JSON.stringify(object) -> serializes into a string
```

APIs

## Building a basic webserver

```
const http = require("http");
```
This loads the http module and assigns it to "http".  When we've been talking about servers, we've assumed that a browser has been making the request, but this doesn't need to be the case.  Better to think in general terms:
- Client is making the request
- Server is fulfilling the request

```
const PORT = process.env.PORT || 8080;
```
The OR says, "if the first part is null, return 8080 instead."

```
const server = http.createServer((request, response) => {
  response.write("Hello!  You reached me!");
  response.end();
  })

server.listen(PORT, () => {
  console.log("App is listening @ http://localhost:8080/");
  });
```

....


UML - Universal Modelling Language
Look this up.  It's a quick way of building diagrams.

