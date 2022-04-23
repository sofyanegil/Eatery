import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <div class="resto__detail" tabindex="0" >
    <img data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" class="lazyload resto__detail__img"/>
    <h1 class="resto__detail__name" tabindex="0">${resto.name}
      <div id="likeButtonContainer"></div>
    </h1>
    <p class="resto__detail__address" tabindex="0">${resto.address}, ${resto.city}</p>
    <hr style="width:80%; margin: 0 auto;" />
    <div class="resto__content" tabindex="0">
      <div class="resto__info" tabindex="0">
        <div class="resto__category">
        ${resto.categories.map((category) => `<p class="resto__category__item" aria-label="category ${category.name}">${category.name}</p>`).join('')}
        <p class="detail__rating"><img class="lazyload" data-src="./icons/star.svg" alt="rating"/>${resto.rating}</p>
        </div>
        <p class="detail__desc">${resto.description}</p>
        <hr />
        <div class="review__container">
          <h2 class="title">Review</h2>
        </div>
      </div>
      <div class="resto__menu" tabindex="0">
        <h2>Menu</h2>
        <div class="menu__food">
          <p>Food</p>
            ${resto.menus.foods.map((food) => `<ul><li>${food.name}</li></ul>`).join('')}
          </div>
          <div class="menu__drink">
            <p>Beverage</p>
            ${resto.menus.drinks.map((drink) => `<ul><li>${drink.name}</li></ul>`).join('')}
          </div>
        </div>       
    </div>
  </div>  
`;

const CreateRestoItemTemplate = (restaurant) => `
  <div class="restaurant">
      <a href="${`/#/detail/${restaurant.id}`}">
      <img src="/icons/placeholder.png" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name} restaurant" class="lazyload restaurant__image">
      <div class="restaurant__content">
        <p class="restaurant__name">${restaurant.name}</p>
        <div class="restaurant__info">
        <p class="restaurant__location">
          <img class="lazyload icon-info" data-src="./icons/location.svg" alt="location"/>${restaurant.city}
        </p>
        <p class="restaurant__rating">
          <img class="lazyload icon-info" data-src="./icons/star.svg" alt="rating"/>${restaurant.rating}
        </p>
        </div>
        <p class="restaurant__description">${restaurant.description}</p>
      </div>
        </a>
    </div>
  `;

const CreateSkeleteonRestoItemTemplate = (count) => {
  let template = '';
  for (let i = 0; i < count; i += 1) {
    template += `
  <div class="restaurant">
      <img src="/icons/placeholder.png" alt="restaurant" class="lazyload restaurant__image">
      <div class="restaurant__content skeleton">
        <p class="restaurant__name skeleton"></p>
        <div class="restaurant__info skeleton">
          <p class="restaurant__location ">
          </p>
          <p class="restaurant__rating ">
          </p>
        </div>
        <p class="restaurant__description skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
      </div>
    </div>
  `;
  }
  return template;
};
const CreateMealItemTemplate = (meal) => `
  <div class="food" tabindex="0">
    <img class="lazyload food__img" data-src="${meal.strMealThumb}" alt="${meal.strMeal} Image" />
    <div class="food__info">
      <p>${meal.strMeal}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="add to favorite restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="delete from favorite restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createReviewTemplate = (data) => {
  let reviewElement = '';
  data.forEach((review) => {
    reviewElement += `
  <div class="review__item">
    <div class="review__head">
      <p class="review__name">${review.name}</p><p class="review__date">${review.date}</p>
    </div>
    <p class="review__comment">${review.review}</p>
  </div>`;
  });
  return reviewElement;
};

const loader = () => `
<div class="load__container">
<div class="load-ring">
<div></div><div></div><div></div><div></div>
</div>
</div>
`;

const failedLoad = () => `
  <div class="load__container">
    <p class="failed__load">Failed to load data</p>
  </div>
`;
export {
  // eslint-disable-next-line max-len
  CreateRestoItemTemplate,
  createRestoDetailTemplate,
  CreateSkeleteonRestoItemTemplate,
  CreateMealItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createReviewTemplate,
  loader,
  failedLoad,
};
