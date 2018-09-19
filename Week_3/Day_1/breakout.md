# Breakout: CSS is Hard

Tips and tricks to understand how CSS works under the hood.

### Rule Ordering:
What happens when two rules conflict with each other?  If the same level of specificity, the most recent rule will be followed.  Usually, a large set of general rules is set at the top of the sheet, and more specific bits are included afterwards to override the defaults.

### Specifity Hierarchy:(
In order of most specific to least specific:
1.  **Inline styles** (Assigning the style directly to the element)
2.  **ID selectors** (Assigning an ID to an element and then selecting it with a style sheet)
3.  **Class selectors, attirbutes selectors, and pseudo-classes**

```css
.class-name { color: red }
[type="text"] { color: red }
p:hover { color:red }
```
_Classes are generally preferred for styling because this creates patterns for the viewer to recognize and establish a sense of context.  IDs are exceptions to the rules you set in classes._

4.  Element selectors and pseudo-element selectors
```css
p { color: red }/
p:after { color: red }
```

## CSS Combinators
(Fiddly, but very handy for designing navigation elements.)

### Descendant Selector (space)

### Direct Child Selector ( > )

### Adjecent Sibling Selector ( + )
```css
.item + p {}
```

### General Sibling Selector (~)


## The `display` Property
Determines where an element is displayed.

### `display: block`
### `display: inline`
### `display: none`

## Further tips

### Classes vs IDs
Classes: CSS
IDs: If-then hooks for JavaScript

### Best practices for structuring stylesheets
- Use CSS frameworks (?)  (SASS, we'll be learning about next week)
- Keep stylesheets close to the pages they're governing.  Mirror the structure of your site with the structure of your CSS.  Blog post pages all use the same post.css, etc.  (Makes things easier to maintain down the road.)

