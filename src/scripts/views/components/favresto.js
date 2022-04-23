class FavRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="fav__margin"></>
    <h1 class="main__title">Your Favorite Restaurant</h1>
    <section class="restaurant__list"></section>
  `;
  }
}

customElements.define('fav-restaurant-section', FavRestaurant);
