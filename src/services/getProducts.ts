import { db, Product } from "astro:db";
const dataProducts = await db.select().from(Product);
let dataMoreRequest = dataProducts.sort((a, b) => b.view - a.view).slice(0, 3);
const dataHomeCatalog = dataProducts.filter(
  (product) => product.type == true && product.view < 100,
);
const dataHomeTwoCatalog = dataProducts.filter(
  (product) => product.id == 2 || product.id == 3,
);
const dataCompanyCatalog = dataProducts.filter(
  (product) => product.type == false,
);
export {
  dataMoreRequest,
  dataHomeCatalog,
  dataHomeTwoCatalog,
  dataCompanyCatalog,
  dataProducts,
};
