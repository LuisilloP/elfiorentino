import { db, Products } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  // TODO
  await db.insert(Products).values([
    {
      id: 1,
      name: "cómoda personalizada",
      price: 85000,
      description:
        "Crea la cómoda perfecta para tu espacio con nuestro diseño personalizable. Fabricada en melamina resistente y equipada con correderas telescópicas, ofrece durabilidad y un uso suave y cómodo. Elige las dimensiones, cantidad de cajones y color que prefieras directamente en nuestra página. Ideal para organizar ropa, accesorios o lo que necesites, adaptándose a cualquier estilo de decoración.",
      photos: {
        urls: [
          "comoda/comodaCuatroCajones.jpg",
          "comoda/comodaCuatroCajones.jpg",
        ],
      },
      tones: { colors: ["blanco", "negro"] },
      view: 100,
      type: true,
    },
    {
      id: 2,
      name: "cocina personalizada",
      price: 290000,
      description: "lorem asdasdasdasdsa",
      photos: {
        urls: [
          "comoda/comodaCuatroCajones.jpg",
          "comoda/comodaCuatroCajones.jpg",
        ],
      },
      tones: { colors: ["blanco", "negro"] },
      view: 100,
      type: true,
    },
    {
      id: 3,
      name: "closet personalizado",
      price: 400000,
      description: "lorem asdasdasdasdsa",
      photos: {
        urls: [
          "comoda/comodaCuatroCajones.jpg",
          "comoda/comodaCuatroCajones.jpg",
        ],
      },
      tones: { colors: ["blanco", "negro"] },
      view: 100,
      type: true,
    },
    {
      id: 4,
      name: "mueble inodoro",
      price: 60000,
      description: "lorem asdasdasdasdsa",
      photos: {
        urls: [
          "comoda/comodaCuatroCajones.jpg",
          "comoda/comodaCuatroCajones.jpg",
        ],
      },
      tones: { colors: ["blanco", "negro"] },
      view: 1,
      type: true,
    },
    {
      id: 5,
      name: "centro de mesa",
      price: 80000,
      description: "lorem asdasdasdasdsa",
      photos: {
        urls: [
          "comoda/comodaCuatroCajones.jpg",
          "comoda/comodaCuatroCajones.jpg",
        ],
      },
      tones: { colors: ["blanco", "negro"] },
      view: 2,
      type: true,
    },
    {
      id: 6,
      name: "mueble x",
      price: 222222,
      description: "lorem asdasdasdasdsa",
      photos: {
        urls: [
          "comoda/comodaCuatroCajones.jpg",
          "comoda/comodaCuatroCajones.jpg",
        ],
      },
      tones: { colors: ["blanco", "negro"] },
      view: 4,
      type: true,
    },
    {
      id: 7,
      name: "mueble x",
      price: 222222,
      description: "lorem asdasdasdasdsa",
      photos: {
        urls: [
          "comoda/comodaCuatroCajones.jpg",
          "comoda/comodaCuatroCajones.jpg",
        ],
      },
      tones: { colors: ["blanco", "negro"] },
      view: 4,
      type: true,
    },
  ]);
}
