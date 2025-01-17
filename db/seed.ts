import { db, Products } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  // TODO
  await db.insert(Products).values([
    {
      id: 1,
      name: "comoda",
      price: 85000,
      description: "lorem asdasdasdasdsa",
      photos: { urls: ["comoda/comodaCuatroCajones.jpg"] },
      tones: {},
      view: 100,
      type: true,
    },
    {
      id: 2,
      name: "cocina personalizada",
      price: 290000,
      description: "lorem asdasdasdasdsa",
      photos: { urls: ["cocina/cocinaPersonalizada.jpg"] },
      tones: {},
      view: 100,
      type: true,
    },
    {
      id: 3,
      name: "closet personalizado",
      price: 400000,
      description: "lorem asdasdasdasdsa",
      photos: { urls: ["cocina/cocinaPersonalizada.jpg"] },
      tones: {},
      view: 100,
      type: true,
    },
    {
      id: 4,
      name: "mueble inodoro",
      price: 60000,
      description: "lorem asdasdasdasdsa",
      photos: {},
      tones: {},
      view: 1,
      type: true,
    },
    {
      id: 5,
      name: "centro de mesa",
      price: 80000,
      description: "lorem asdasdasdasdsa",
      photos: {},
      tones: {},
      view: 2,
      type: true,
    },
    {
      id: 6,
      name: "mueble x",
      price: 222222,
      description: "lorem asdasdasdasdsa",
      photos: {},
      tones: {},
      view: 4,
      type: true,
    },
  ]);
}
