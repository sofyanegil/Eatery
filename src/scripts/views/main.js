import './components/navbar';
import './components/hero';
import './components/restaurant';
import './components/food';

const nav = document.querySelector('nav');

function scrollDown() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) nav.classList.add('nav__scroll');
  else nav.classList.remove('nav__scroll');
}

window.onscroll = () => scrollDown();
