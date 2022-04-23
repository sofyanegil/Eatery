import FavoriteRestaurant from '../../data/favoriteresto-idb';
import { CreateRestoItemTemplate, loader, failedLoad } from '../templates/template-creator';
import '../components/favresto';

const Favorite = {
  async render() {
    return `
      <div class="load"></div>
      <fav-restaurant-section id="resto__list" >
      </fav-restaurant-section>
    `;
  },

  async afterRender() {
    const load = document.querySelector('.load');

    try {
      load.innerHTML = loader();
      const restaurant = await FavoriteRestaurant.getAllRestaurants();
      const restoContainer = document.querySelector('.restaurant__list');

      if (restaurant.length !== 0) {
        restoContainer.innerHTML = '';
        restaurant.forEach((resto) => {
          restoContainer.innerHTML += CreateRestoItemTemplate(resto);
        });
        load.style.display = 'none';
        return;
      }

      const mainTitle = document.querySelector('.main__title');
      mainTitle.innerHTML = 'No favorite restaurant';
      load.style.display = 'none';
    } catch (error) {
      load.innerHTML = failedLoad();
    }
  },
};

export default Favorite;
