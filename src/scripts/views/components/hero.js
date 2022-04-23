class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">Welcome to Eatery</h1>
        <h2 class="hero__tagline">" We serve <span>good food</span> for make your <span>good mood</span> "</h2>
        <a href="#resto__list" class="hero__explore"
          >Explore Now
          <img src="/icons/cup.svg" alt="explore" />
        </a>
      </div>
    </div>
    `;
  }
}

customElements.define('hero-section', Hero);
