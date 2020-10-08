# JSML (JavaScript Markup Language)

Easily add HTML elements to your page with JSML!

### Example 1

`index.html`

```html
<html>
  <body>
    <script src="jsml.min.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```

`app.js`

```javascript
el('h1', {
  innerText: "Finn's Awesome Website",
  style: 'font-family: sans-serif;',
});

el('p', {
  innerText: 'Hello, and welcome to my site!',
  id: 'changeMe',
});
```

### Building

`npm i -g minify`
`./build`

### Functions

`el(type, options)` creates and element with specified options and adds it to the page (it also returns the object)
`getId(id)` shorthand for getElementById
`getClass(className)` shorthand for getElementByClassName
