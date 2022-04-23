const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const likingRestaurant = async ({ I }) => {
  I.see('No favorite restaurant', '.main__title');

  I.amOnPage('/');
  I.seeElement('.restaurant a');
  const firstRestaurant = await locate('.restaurant a').first();
  I.click(firstRestaurant);
  const firstRestaurantTitle = await I.grabTextFrom('.resto__detail__name');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');
  const likedRestaurant = await I.grabTextFrom('.restaurant__name');
  assert.strictEqual(firstRestaurantTitle, likedRestaurant);
};

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('No favorite restaurant', '.main__title');
});

Scenario('liking one restaurant', async ({ I }) => {
  await likingRestaurant({ I });
});

Scenario('unliking one restaurant', async ({ I }) => {
  await likingRestaurant({ I });

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');
  I.click('.restaurant a');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('No favorite restaurant', '.main__title');
});
