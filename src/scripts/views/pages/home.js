import RestaurantSource from '../../data/RestaurantSource';
import { CreateMealItemTemplate, CreateRestoItemTemplate, CreateSkeleteonRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <hero-section>      
      </hero-section>
      <h3 id="resto__list" class="main__title">Explore Restaurant</h3>
        <section class="restaurant__list" >
        ${CreateSkeleteonRestoItemTemplate(20)}
        </section>
      <food-section class="food__container"></food-section>
    `;
  },

  async afterRender() {
    const response = await RestaurantSource.getAllRestaurants();
    const { restaurants } = response;

    const meals = await RestaurantSource.getListFood();
    const restoContainer = document.querySelector('.restaurant__list');

    restoContainer.innerHTML = '';
    restaurants.forEach((resto) => {
      restoContainer.innerHTML += CreateRestoItemTemplate(resto);
    });

    const mealContainer = document.querySelector('.food__list');
    meals.slice(-8).forEach((meal) => {
      mealContainer.innerHTML += CreateMealItemTemplate(meal);
    });
  },
};

export default Home;
