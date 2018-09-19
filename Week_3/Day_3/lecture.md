# Lecture: AJAX

## History
Jesse James: father of AJAX.  Wrote a blog post in 2005 about classic web application architecture, that required incremental participation from the user and little bits of new information fed from the server as a response.  James (from a user-experience perspective) argued that this makes the user feel out of control and frequently stopped.  James wanted the user to have freedom to approach the data as they wished, and the server dynamically populates the browser with new and useful information/paths to continue.

AJAX uses XHTML requests to load information from the server and populate/update the browser while the user controls the flow.  This is the critical shift from multi-page applications.  There are multiple listeners active on the page ready to do different things for the user.

This requires anticipation of what users will try to do, so that you can guide users to what is possible (don't show the delete button for tweets you don't own, etc.)

jQuery provides an ajax method

```js
$.ajax('/address.html')
  .done(respone) => {
    console.log(response)
  })
  .fail(() => {
    <Error message, etc.>
  })
```

## Promises

JavaScript now has a `.then()` method so that whenever the previous portion (the asynchronous _promise_) is completed, do the next bit.  You can chain

