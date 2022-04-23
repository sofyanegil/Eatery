import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/RestaurantSource';
import {
  createRestoDetailTemplate, createReviewTemplate, loader, failedLoad,
} from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favoriteresto-idb';
import addReview from '../../utils/add-review';
import '../components/form-review';

const Detail = {
  async render() {
    return `
    <div class="load"></div>
    <section class="detail__container"></section>
    <form-review></form-review>
      `;
  },

  async afterRender() {
    const load = document.querySelector('.load');

    try {
      load.innerHTML = loader();
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const response = await RestaurantSource.getDetailRestaurant(url.id);
      const { restaurant } = response;

      const detailContainer = document.querySelector('.detail__container');
      detailContainer.innerHTML += createRestoDetailTemplate(restaurant);

      const reviewContainer = document.querySelector('.review__container');
      reviewContainer.innerHTML += createReviewTemplate(restaurant.customerReviews);
      if (navigator.onLine) {
        addReview.send(url);
      }
      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoritesMovies: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          pictureId: restaurant.pictureId,
          name: restaurant.name,
          address: restaurant.address,
          city: restaurant.city,
          rating: restaurant.rating,
          description: restaurant.description,
        },
      });
      load.style.display = 'none';
    } catch (error) {
      load.innerHTML = failedLoad();
    }
  },
};

export default Detail;
