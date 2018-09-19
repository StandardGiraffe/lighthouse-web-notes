# Lecture: Node/Postgres

We'll be using pg node module.

A transaction is a group of operations where if any of them fail, we can undo the entire block.

Promises: Allow us to solve "callback hell" --- waiting for a succession of asynchronous queries to complete.

Use .then(() => {...}) to wait until an asynchronous thing happens.
.catch( err => {...}) to catch errors.  This splits out the normal