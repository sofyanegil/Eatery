class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="nav">
        <div class="nav__container">
          <a href="#/" class="nav__logo"> Eatery</a>
          <button id="nav__menu" class="nav__button" aria-label="navigation-menu">☰</button>
          <ul id="nav__drawer" class="nav__link">
            <li class="nav__item"><a href="#/"> Home</a></li>
            <li class="nav__item"><a href="#/favorite">Favorite</a></li>
            <li class="nav__item"><a href="https://linkedin.com/in/sofyanegi" target="_blank" rel="noopener noreferrer">About Us</a></li>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define('navbar-section', Navbar);
