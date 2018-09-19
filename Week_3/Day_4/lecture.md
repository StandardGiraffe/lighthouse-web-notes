# Lecture: MongoDB and working with data

Common problem with data: the function to add more records to the array is coupled to the known structure of the database.

The problems of managing data (scalability, concurrency, privileges, security, queries, corruption) are well-known and documented, and database management software/libraries solve these so that the particulars of the given database can be focused on.

MongoDB is a document storage database system that builds/manages the infrastructure so that we can work at a logical layer.  Mongo is comparatively new (10 years old) --- the techniques for writing good database software were mostly developed in the 1970s.

Mongo is actually a database server that we send requests to.  mongod (for mongo daemon) is the server, and mongo is the client (opens a REPL).

Mongo can be used as a relational database manager (like Oracle), but it doesn't need to be.  A better way to think of it is as a massive collection of records with arbitrary contents (in key:value pairs) that can be filtered for specific contents.

