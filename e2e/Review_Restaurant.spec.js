const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Review one restaurant', async ({ I }) => {
  I.seeElement('.restaurant a');
  const firstRestaurant = await locate('.restaurant a').first();
  I.click(firstRestaurant);
  const name = 'Sofyan Egi';
  const review = 'This is automation test review';

  I.seeElement('#review__name');
  I.fillField('#review__name', name);

  I.seeElement('#review__text');
  I.fillField('#review__text', review);

  I.click('#submit__review');

  I.seeElement(locate('.review__container .review__item:nth-last-of-type(1)'));
  const reviewerName = await I.grabTextFrom(locate('.review__container .review__item:nth-last-of-type(1) .review__name'));
  const reviewerReview = await I.grabTextFrom(locate('.review__container .review__item:nth-last-of-type(1) .review__comment'));

  assert.strictEqual(name, reviewerName);
  assert.strictEqual(review, reviewerReview);
});
