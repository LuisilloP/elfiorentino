import { column, defineDb, defineTable } from "astro:db";

// https://astro.build/db/config

const Products = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    slug: column.text(),
    price: column.number(),
    description: column.text(),
    photos: column.json(),
    tones: column.json(),
    view: column.number(),
    type: column.boolean(),
  },
});

export default defineDb({
  tables: { Products },
});
