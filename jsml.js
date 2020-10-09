function el(type = 'p', txt = '', options = {}) {
  let el = document.createElement(type);
  el.innerText = txt;

  for (const i in options) {
    el[i] = options[i];
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
