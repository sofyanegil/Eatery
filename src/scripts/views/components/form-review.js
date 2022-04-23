class FormReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
  <div class="review__form">
    <h2>Add New Review</h2>
    <label for="name">Name</label>
    <input type="text" name="name" id="review__name" placeholder="Input your name !" autocomplete="off" />
    <label for="review">Review</label>
    <textarea id="review__text" name="review" rows="4" placeholder="Give Us your honest review !"></textarea>
    <button class="submit" id="submit__review" aria-label="Submit new review">Submit</button>
  </div>
  `;
  }
}

customElements.define('form-review', FormReview);
