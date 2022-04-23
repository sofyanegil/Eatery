class Restaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
  <h3 class="main__title">Explore Restaurant</h3>
  <section class="restaurant__list"></section>
  `;
  }
}

customElements.define('restaurant-section', Restaurant);
