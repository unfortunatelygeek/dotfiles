import { faker, tr } from '@faker-js/faker';
import { db } from '../database.js';
import { store } from '../../models/stores.js';
import { products } from '../../models/product.js';
import { productReviews } from '../../models/product-review.js';
import { storeReviews } from '../../models/store-reviews.js';
import { post } from '../../models/posts.js';

async function fakeStores() {
  console.log('Generating fake stores...');
  try {
    const fakeStores = 5;
    const promises = [];

    for (let i = 0; i < fakeStores; i++) {
      const id = faker.string.uuid();
      const name = faker.company.name();
      const about = faker.lorem.paragraph(3);
      const location_city = faker.location.city();
      const location_state = faker.location.state();
      const contact_number = faker.phone.number();
      const contact_email = faker.internet.email();
      const rating = faker.number.float({ max: 5, min: 0, fractionDigits: 2 }).toString();

      const insertPromise = db.insert(store).values({
        id,
        name,
        about,
        location_city,
        location_state,
        contact_email,
        contact_number,
        rating,
      });

      promises.push(insertPromise);
    }

    await Promise.all(promises);
    console.log('Fake stores generation complete.');
  } catch (error) {
    console.error('Error generating fake stores:', error);
  }
}


async function fakeProducts() {
  const fakeProducts = 10;
  const UID: string[] = [];
  (await db.select({ sid: store.id }).from(store)).forEach(({ sid: uuid }) => {
    UID.push(uuid);
  });
  const promises: Promise<unknown>[] = [];

  for (const uid of UID) {
    for (let i = 0; i < fakeProducts; i++) {
      const id = faker.string.uuid();
      const name = faker.commerce.product();
      const about = faker.lorem.words(5);
      const store = uid;
      const price = faker.number.int({ min: 0, max: 300 });
      const inventory = faker.number
        .float({ max: 300, min: 0, fractionDigits: 2 })
        .toString();
      const unit = 'pp';
      const isOrganic = faker.datatype.boolean() ? true : false;
      const isSeasonal = faker.datatype.boolean() ? true : false;
      const rating = faker.number
        .float({ max: 5, min: 0, fractionDigits: 2 })
        .toString();

      promises.push(
        db.insert(products).values({
          id,
          name,
          about,
          store,
          price,
          inventory,
          unit,
          isOrganic,
          isSeasonal,
          rating,
        })
      );
    }
  }

  await Promise.all(promises);
}

async function fakeProductReviews() {
  const fakeReviews = 3;
  const UID: string[] = [];
  (await db.select({ pid: products.id }).from(products)).forEach(
    ({ pid: uuid }) => {
      UID.push(uuid);
    }
  );
  const promises: Promise<unknown>[] = [];
  for (const uid of UID) {
    for (let i = 0; i < fakeReviews; i++) {
      const review_id = faker.string.uuid();
      const product = uid;
      const reviewer = faker.person.fullName();
      const content = faker.lorem.paragraph(3);
      const rating = faker.number.int({ max: 5, min: 0 });

      promises.push(
        db.insert(productReviews).values({
          review_id,
          product,
          reviewer,
          content,
          rating,
        })
      );
    }
  }
  await Promise.all(promises);
}

async function fakeStoreReviews() {
  const fakeReviews = 3;
  const UID: string[] = [];
  (await db.select({ sid: store.id }).from(store)).forEach(({ sid: uuid }) => {
    UID.push(uuid);
  });
  const promises: Promise<unknown>[] = [];
  for (const uid of UID) {
    for (let i = 0; i < fakeReviews; i++) {
      const review_id = faker.string.uuid();
      const store = uid;
      const reviewer = faker.person.fullName();
      const content = faker.lorem.paragraph(3);
      const rating = faker.number.int({ max: 5, min: 0 });

      promises.push(
        db.insert(storeReviews).values({
          store,
          review_id,
          reviewer,
          content,
          rating,
        })
      );
    }
  }
  await Promise.all(promises);
}

async function fakePosts() {
  const fakePosts = 4;
  const UID: string[] = [];
  (await db.select({ sid: store.id }).from(store)).forEach(({ sid: uuid }) => {
    UID.push(uuid);
  });
  const promises: Promise<unknown>[] = [];
  for (const uid of UID) {
    for (let i = 0; i < fakePosts; i++) {
      const id = faker.string.uuid();
      const author = uid;
      const comments = 5;
      const content = faker.lorem.paragraph(3);
      const rating = faker.number.int({ max: 5, min: 0 });

      promises.push(
        db.insert(post).values({
          id,
          author,
          comments,
          content,
          rating,
        })
      );
    }
  }
  await Promise.all(promises);
}

// await fakeProducts();
// await fakeProductReviews();
// await fakeStoreReviews();
// await fakePosts();
