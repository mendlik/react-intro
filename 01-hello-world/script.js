function createElement(type, text) {
  var element = document.createElement(type);
  element.innerText = text;
  return element;
}

document
  .getElementById('root')
  .appendChild(createElement('h1', 'Hello from DOM'));
