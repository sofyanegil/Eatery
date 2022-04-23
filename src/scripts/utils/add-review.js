import RestaurantSource from '../data/RestaurantSource';
import { createReviewTemplate } from '../views/templates/template-creator';

const addReview = {
  async send(url) {
    const submitBtn = document.querySelector('#submit__review');
    const reviewName = document.querySelector('#review__name');
    const reviewText = document.querySelector('#review__text');

    submitBtn.addEventListener('click', async () => {
      const review = {
        id: url.id,
        name: reviewName.value,
        review: reviewText.value,
      };

      if (review.name && review.review) {
        const reviewContainer = document.querySelector('.review__container');

        try {
          const response = await RestaurantSource.addReview(review);
          RestaurantSource.getDetailRestaurant(url.id);
          reviewContainer.innerHTML = createReviewTemplate(response.customerReviews);
        } catch (error) {
          reviewContainer.innerHTML = `<p>${error.message}</p>`;
        }
      }
      this._resetForm();
    });
  },

  async _resetForm() {
    const reviewName = document.querySelector('#review__name');
    const reviewText = document.querySelector('#review__text');
    reviewName.value = '';
    reviewText.value = '';
  },
};

export default addReview;
