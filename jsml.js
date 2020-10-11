function el(type = 'p', ...args) {
  let el = document.createElement(type);

  for (const t in args) {
    if (typeof args[t] === 'object') {
      for (const i in args[t]) {
          el[i] = args[t][i];
        }
    }
    if (typeof args[t] === 'string') {
      el.innerText = args[t]
    }
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
