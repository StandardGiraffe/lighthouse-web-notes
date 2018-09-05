# Lecture: Modules and Testing
## Lecturer: Juan Gonzales

Being a good web developer is about knowing what _not_ to write (because someone already did it for us).  Know what's out there.

Today, we're moving towards that objective.

JavaScript Objects and Callbacks were the big objectives of this week, apparently.

When building objects, even though you don't need to put key names in quotation marks in JS, it'll be harder to pass through reliably on the network, so use quotation marks.
`{"father": "Bob Billy"}`

We started looking at the family member record data set and built a function to find fathers (and then used it twice to find a grandfather).  We tested at each step, but we were interested in setting up systematic tests.

We often separate data, code, and testing into modules.

We extracted the findFather function into a new file `familyModule.js` and added to it,
```
module.exports = {
  findFather: findFather
}
```
The key in the above object can be anything (it's how outside modules will call the function), the value needs to be the function name as it's written.

In the code file:
```
var family = (require("./familyModule")
```

Currently, calling the function doesn't work because the function is written to point to a specific object (family), which is no longer in the same file.

...


## Testing:

Coverage: how much of your code is covered by the test.  It may seem to test findGrandpa ....

Hoo boy.