# Breakout: Knex

SQL is its own standard; various RDBMSes follow this spec more or less, but may implement their own functionality, or implement functionality imperfectly, leading to "dialects" of SQL.  In general, though, these all function the same way.

Knex is part of an ORM (Object-Relational-Mapper)---maps tables, rows, columns of databases onto objects and arrays of JavaScript, Python, etc.

You can actually find out the literal SQL that Knex is running by ending the chain with a .toString().

```JS
knex('movies').select().toString();
```

