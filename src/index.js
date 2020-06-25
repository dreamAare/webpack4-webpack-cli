// src/index.js
import './style.css'

function component() {
  var element = document.createElement('div');

  element.innerHTML = "Hello Webpack";

  element.addEventListener('click', function () {
    console.log(1)
  })

  return element;
}

document.body.appendChild(component());


window.onload = function () {
  console.log('window重新加载了1')
  console.log(process.env.NODE_ENV)
}
