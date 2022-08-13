import './style.css';
import javascriptLogo from './javascript.svg';
import { setupCounter } from './counter.js';
import buttonSyles from './button.module.css';
import imagen1 from './vite2.svg';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <button id=btn>Click</button>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  <img id="img" />
`
document.getElementById('btn').className = buttonSyles.btn;
setupCounter(document.querySelector('#counter'));
const imagen = document.getElementById('img');
imagen.src = `${imagen1}`;