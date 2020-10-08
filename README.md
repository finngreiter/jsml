# JSML (JavaScript Markup Language)

Easily add HTML elements to your page with JSML!

## Examples

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

### Example 2

When used with APIs

```javascript
async function loaded() {
  // get stuff
  const res = await fetch('http://apu-url.example/id/api-key');
  const data = await res.json();

  // add to page

  el('h1', {
    innerText: `User: ${data.user}`,
    className: 'title big',
  });

  el('p', {
    innerText: `Bio: ${data.bio}`,
    className: 'bio-text medium-text',
  });

  el('a', {
    innerText: `Website: ${data.websiteName}`,
    href: data.websiteUrl,
  });
}
```

## Building

install the minify package:
`npm i -g minify`
and run build script
`./build`

## Functions

- `el(type, options)` creates and element with specified options and adds it to the page (it also returns the object)
- `getId(id)` shorthand for getElementById
- `getClass(className)` shorthand for getElementByClassName
