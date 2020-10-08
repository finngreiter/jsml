function el(type, options) {
  let el = document.createElement(type);

  for (const i in options) {
    console.log((el[i] = options[i]));
  }

  appendEl(el, document.body);
  return el;
}

function getId(id) {
  return document.getElementById(id);
}

function getClass(className) {
  return document.getElementsByClassName(className);
}

function appendEl(el, place) {
  place.appendChild(el);
}
