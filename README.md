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
});
```
