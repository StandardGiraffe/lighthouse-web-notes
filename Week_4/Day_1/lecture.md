# Lecture: Intro to Relational Databases and SQL

Relation: IS a table.  Comes from databases' history in mathematics and set theory.  This goes back to the 50s and 60s, and mainframe computers which could manage data (rather than perform calculations) to take the requirement away from paper.  Databases started to appear commercially around the 70s (like Oracle) which took advantage of relational calculus and theoretical work on how to efficiently work with sets of data.  Gradually, it was recognized that a standardized language was needed as a foundation, and SQL (Structured Query Language) was developed.

We want to make sure that data is accessible, safely and efficiently stored, accessible to the right people.

## How data is organized in relational database?

## Where should we start when we're building a new system?
The first step to building a system is identifying the _domain_ of the system.  In our example, we're using music; start asking what's important about music---how is it organized, what do people care about?
We looked at year vs decade as options for metadata; if one value can be directly and unambiguously calculated from another value, it should not be independently entered.

Stage one: analysis --- exploring the possibilities of the database.  Become experts in the domain.

Stage two: diagram the relationships between tables (**ERD**: Entity Relationship Diagram).  Represents what we can/can't do with our data.  Song - Album has a many-to-one relationship.  Distinguishing simple attributes (year of publication) vs holographic and complex _entity_ (album)

Practice writing and reading ERDs.

Resolve many-to-many relationships with a joining table.  There should only be one-to-many relationships in the ERD (ideally).

Stage three: Data specification in SQL (create tables and announce relationships)

Stage four: Insert data record by record into individual tables

It may seem crazy to insert the data so peacemeal, but if the kernel of the design is solid, based on good analysis and reasonable relationships, it will be extremely robust.

