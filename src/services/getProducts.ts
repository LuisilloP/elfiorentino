import { db, Products } from "astro:db";

const dataProducts = await db.select().from(Products);

let dataMoreRequest = dataProducts.sort((a, b) => b.view - a.view).slice(0, 3);
const dataHomeCatalog = dataProducts
  .filter((product) => product.type == true && product.view < 100)
  .sort((a, b) => a.id - b.id);

const dataHomeTwoCatalog = dataProducts
  .filter((product) => product.id == 2 || product.id == 3)
  .sort((a, b) => a.id - b.id);
const dataCompanyCatalog = dataProducts
  .filter((product) => product.type == false)
  .sort((a, b) => a.id - b.id);

export {
  dataMoreRequest,
  dataHomeCatalog,
  dataHomeTwoCatalog,
  dataCompanyCatalog,
  dataProducts,
};
