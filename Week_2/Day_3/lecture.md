# Lecture: CRUD with Express

CRUD - Operations we can do on data.  When thinking of an application, the lifecycle of data should be considered (and designed for).

RESTful - Representational State Transfer; a way to represent how things change their state.  An abstract way of thinking about data and applications.  What an application does is represent a state; more commonly, when we hear the acronym REST, we're talking about something simliar to CRUD: how can we explain what an application does using a minimum amount of information.  Let's call out the specific actions that are possible through the application that will change the state that the application represents.

## Example: A system to manage LPs

Reading RESTful API notation: We want to use the minimum amount of information possible to represent what's done.


* Can buy a new LP and add it to the collection
* Can read the information about the LP
* ...

* GET     /lps                (Get the entire library)
* GET     /lps/year/1996           (Get a subset of the library present in 1966)
* GET     /lps/artist/davis           (Get a subset of the library with Davis as the artist)
* GET     /lps/kind-of-blue   (Get a specific LP by title)
* POST    /lps                (Add a new file to the lps.)
  * { payload }
* PUT     /lps/kind-of-blue   (Updates information on an existing record by )
  * { payload }
* DELETE  /lps/kind-of-blue   (Removes a specific lp.  Note that we have not built functionality at this point to remove anything else but one album at a time.)


Juan's code used middleware "Morgan" to log the server's interactions.  One line of code to set and listen.

We worked through each point of the spec and set up the functionality matching the URL.

