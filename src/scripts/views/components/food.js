class Food extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="food__container">
      <h3 class="food__title">Our Favorite Menu</h3>
      <div class="food__list"></div>
    </div>`;
  }
}

customElements.define('food-section', Food);
