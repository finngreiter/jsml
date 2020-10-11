# JSML (JavaScript Markup Language)

Easily add HTML elements to your page with JSML!

## Building

install the minify package:
`npm i -g minify`
and run build script
`./build`

## Functions

- `el(type, text, options)` or `el(type, options, text)` or `el(type, text)` or `el(type, options)` creates and element with specified options and adds it to the page (it also returns the object)
- `getId(id)` shorthand for getElementById
- `getClass(className)` shorthand for getElementByClassName
