# Lecture:  History of the Web and the CSS Box Model

Juan says that this week, we should start to feel like we're in more control of the situation.

How do we design good HTML?  (Bearing in mind that whatever we do today will look very ugly.)  Beauty in information organization.

Juan recommends the TV series: "Halt and Catch Fire."

Late 90s:
- Web was still new, and people didn't really know how to use it.  Jump in and do whatever you want.  No commercialization, people discovered others around the world shared their passions.  The inclination was to build a webpage to display those passions.  Pages included links to other people's pages (good netizenship), because the web was uncharted---how would you find these things otherwise?  Vital in an age without effective search engines.
- Frequent updates became "web logs" with personal content at the top and links at the bottom.  Humans are quick recognize these kinds of patterns, and a standard develops.  Design language forms.

Early 2000s
- A lot of people were taking the time to curate the web.  (Google piggybacked on this process.)

### Semantic Tags
- HTML is all about structure: telling you about verbs (links), adjectives (headings), etc., But it has no clue about the content of those things.
- One of the most important transformations of HTML was the introduction of "semantic tags"---the ability to label portions of the page, in the code, with meaning.
```
<ul id="collection">
  <li>
    <div>Mario Bros
      <span class="Publisher">Nintendo</span>
    </div>
  </li>
```
Using classes to semantically identify content types became popular and widespread.

At this time, though, there were very few tags available to identify things.

## id vs class
IDs are unique identifiers for blocks of text
Classes are repeating identifiers for categories of information that are likely to be associated with multiple things.

CSS allowed you to attach styles to classes and IDs.

```
<html>
  <head>
    <style>
      h1 {
        font-size: 1.5em;
      }font-style: "italic"
      .Publisher {
        color: yellow
      }
      #collection li {

      }
```

We're seeing that local styles override those in the stylesheet.

- Modify an element, just name the element (h1 {})
- Modify a class, period first (.Publisher {})
- modify an id, hash first (#collection)

Can identify specific classes and elements within an id (#collection li {})


## Going deeper into CSS
Remember the idea of semantics as we go.  HTML5 helped to identify the areas of a page that were important.  Look up "Content Sectioning" on MDN.  We now have tags for `<address>`, `<article>`, `<header>`, etc.

Use `<header>` to section top matter, `<main>` for the dominant content within the body.  What we're seeing is these semantic tags don't necessarily change the physical structure of the page.  _Separation of Concerns_ means, let CSS worry about the styling.

We added a box to the demo's `<main>` element, which created a box that extended all the way to the side of the screen.  The "Box Model" of CSS is the idea that each element on the page is encapsulated by an imaginary box.

In HTML, the boxes in the Box Model have padding, borders, and margins outside.  **can these be specified in percentages of page width, rather than pixels?  -- Yep**

**how can the box model display a non-integer number for the hight of the content?**




