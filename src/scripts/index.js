import 'regenerator-runtime'; /* for async await transpile */
import './views/main';
import '../styles/main.scss';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#nav__menu'),
  drawer: document.querySelector('#nav__drawer'),
  content: document.querySelector('#main__content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
