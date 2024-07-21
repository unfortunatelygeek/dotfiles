import { faker } from '@faker-js/faker'; // Adjust the import based on your actual module structure
import { db } from '../database.js';
import { store } from '../../models/stores.js';
import { products } from '../../models/product.js';
import { productReviews } from '../../models/product-review.js';
import { storeReviews } from '../../models/store-reviews.js';
import { post } from '../../models/posts.js';

async function fakeStores() {
  console.log('Generating fake stores...');
  try {
    const fakeStores: number = 5; // Explicitly declare the type for clarity
    const promises: Promise<void>[] = []; // Specify Promise<void> if db.insert() doesn't return anything
    
    for (let i: number = 0; i < fakeStores; i++) {
      const id: string = faker.string.uuid();
      const name: string = faker.company.name();
      const about: string = faker.lorem.paragraph(3);
      const location_city: string = faker.location.city();
      const location_state: string = faker.location.state();
      const contact_number: string = faker.phone.number();
      const contact_email: string = faker.internet.email();
      const rating: string = faker.number.float({ max: 5, min: 0, fractionDigits: 2 }).toString();

      const insertPromise: Promise<void> = db.insert(store).values({
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
  const fakeProducts: number = 10;
  const UID: string[] = [];
  (await db.select({ sid: store.id }).from(store)).forEach(({ sid: uuid }: { sid: string }) => {
    UID.push(uuid);
  });
  const promises: Promise<void>[] = [];

  for (const uid of UID) {
    for (let i: number = 0; i < fakeProducts; i++) {
      const id: string = faker.string.uuid();
      const name: string = faker.commerce.product();
      const about: string = faker.lorem.words(5);
      const storeId: string = uid; // Adjust variable name to avoid conflict with store model
      const price: number = faker.number.int({ min: 0, max: 300 });
      const inventory: string = faker.number.float({ max: 300, min: 0, fractionDigits: 2 }).toString();
      const unit: string = 'pp';
      const isOrganic: boolean = faker.datatype.boolean();
      const isSeasonal: boolean = faker.datatype.boolean();
      const rating: string = faker.number.float({ max: 5, min: 0, fractionDigits: 2 }).toString();

      const insertPromise: Promise<void> = db.insert(products).values({
        id,
        name,
        about,
        store: storeId,
        price,
        inventory,
        unit,
        isOrganic,
        isSeasonal,
        rating,
      });

      promises.push(insertPromise);
    }
  }

  await Promise.all(promises);
}

async function fakeProductReviews() {
  const fakeReviews: number = 3;
  const UID: string[] = [];
  (await db.select({ pid: products.id }).from(products)).forEach(({ pid: uuid }: { pid: string }) => {
    UID.push(uuid);
  });
  const promises: Promise<void>[] = [];
  for (const uid of UID) {
    for (let i: number = 0; i < fakeReviews; i++) {
      const review_id: string = faker.string.uuid();
      const product: string = uid;
      const reviewer: string = faker.person.fullName();
      const content: string = faker.lorem.paragraph(3);
      const rating: number = faker.number.int({ max: 5, min: 0 });

      const insertPromise: Promise<void> = db.insert(productReviews).values({
        review_id,
        product,
        reviewer,
        content,
        rating,
      });

      promises.push(insertPromise);
    }
  }
  await Promise.all(promises);
}

async function fakeStoreReviews() {
  const fakeReviews: number = 3;
  const UID: string[] = [];
  (await db.select({ sid: store.id }).from(store)).forEach(({ sid: uuid }: { sid: string }) => {
    UID.push(uuid);
  });
  const promises: Promise<void>[] = [];
  for (const uid of UID) {
    for (let i: number = 0; i < fakeReviews; i++) {
      const review_id: string = faker.string.uuid();
      const storeId: string = uid; // Adjust variable name to avoid conflict with store model
      const reviewer: string = faker.person.fullName();
      const content: string = faker.lorem.paragraph(3);
      const rating: number = faker.number.int({ max: 5, min: 0 });

      const insertPromise: Promise<void> = db.insert(storeReviews).values({
        review_id,
        store: storeId,
        reviewer,
        content,
        rating,
      });

      promises.push(insertPromise);
    }
  }
  await Promise.all(promises);
}

async function fakePosts() {
  const fakePosts: number = 4;
  const UID: string[] = [];
  (await db.select({ sid: store.id }).from(store)).forEach(({ sid: uuid }: { sid: string }) => {
    UID.push(uuid);
  });
  const promises: Promise<void>[] = [];
  for (const uid of UID) {
    for (let i: number = 0; i < fakePosts; i++) {
      const id: string = faker.string.uuid();
      const author: string = uid;
      const comments: number = 5;
      const content: string = faker.lorem.paragraph(3);
      const rating: number = faker.number.int({ max: 5, min: 0 });

      const insertPromise: Promise<void> = db.insert(post).values({
        id,
        author,
        comments,
        content,
        rating,
      });

      promises.push(insertPromise);
    }
  }
  await Promise.all(promises);
}

// Example usage:
// await fakeStores();
// await fakeProducts();
// await fakeProductReviews();
// await fakeStoreReviews();
// await fakePosts();
