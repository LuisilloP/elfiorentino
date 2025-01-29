import { db, Product } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  // TODO
  await db.insert(Product).values([
    {
      id: 1,
      name: "cómoda personalizada",
      slug: "comoda-personalizada",
      price: 85000,
      description:
        "Crea la cómoda perfecta para tu espacio con nuestro diseño personalizable. Fabricada en melamina resistente y equipada con correderas telescópicas, ofrece durabilidad y un uso suave y cómodo. Elige las dimensiones, cantidad de cajones y color que prefieras directamente en nuestra página. Ideal para organizar ropa, accesorios o lo que necesites, adaptándose a cualquier estilo de decoración.",
      photos: {
        urls: ["comoda/comoda_one.jpg", "comoda/comoda_two.jpg"],
      },
      tones: { colors: ["blanco", "negro"] },
      view: 100,
      type: true,
    },
    {
      id: 2,
      name: "cocina personalizada",
      slug: "cocina-personalizada",
      price: 290000,
      description:
        "Diseña la cocina de tus sueños con nuestras opciones personalizables, donde el valor comienza desde el metro lineal. Fabricada en melamina de alta calidad, con correderas telescópicas para un uso suave y resistente, puedes elegir los colores, dimensiones y distribución que mejor se adapten a tu espacio y estilo.",
      photos: {
        urls: [
          "cocina2/cocina_one.jpg",
          "cocina2/cocina_two.jpg",
          "cocina2/cocina_three.jpg",
          "cocina2/cocina_four.jpg",
        ],
      },
      tones: { colors: ["blanco", "negro"] },
      view: 100,
      type: true,
    },
    {
      id: 3,
      name: "closet personalizado",
      slug: "closet-personalizado",
      price: 400000,
      description:
        "Con un valor que parte desde el metro lineal, ofrecemos estructuras fabricadas en melamina resistente, equipadas con correderas telescópicas para un uso fluido y duradero. Personaliza colores, dimensiones y la distribución interna para que se ajuste perfectamente a tus necesidades y estilo. Ideal para mantener tu ropa y accesorios siempre organizados.",
      photos: {
        urls: [
          "closet/closet_one.jpg",
          "closet/closet_two.jpg",
          "closet/closet_three.jpg",
          "closet/closet_four.jpg",
        ],
      },
      tones: { colors: ["blanco", "negro"] },
      view: 100,
      type: true,
    },
    {
      id: 4,
      name: "mueble inodoro",
      slug: "mueble-inodoro",
      price: 60000,
      description:
        "Fabricado en melamina resistente a la humedad, su diseño parte desde un estilo minimalista y funcional, con opciones de personalización en colores, dimensiones y compartimentos. Perfecto para organizar productos de higiene y mantener tu espacio ordenado.",
      photos: {
        urls: ["banio/banio_one.jpg"],
      },
      tones: { colors: ["blanco", "negro"] },
      view: 1,
      type: true,
    },
    {
      id: 5,
      name: "mesa de centro",
      slug: "mesa-de-centro",
      price: 80000,
      description:
        "Fabricada con el material que elijas, como melamina, madera natural o combinaciones modernas, se adapta perfectamente a tus gustos y necesidades. Personaliza su tamaño, forma y acabado para lograr un diseño único que complemente tu estilo.",
      photos: {
        urls: [
          "mesaCentro/mesacentro_one.jpg",
          "mesaCentro/mesacentro_two.jpg",
          "mesaCentro/mesacentro_three.jpg",
        ],
      },
      tones: { colors: ["blanco", "negro"] },
      view: 2,
      type: true,
    },
    {
      id: 6,
      name: "zapatero",
      slug: "zapatero",
      price: 222222,
      description:
        " Fabricado con el material de tu elección, como melamina o madera, este mueble combina funcionalidad y diseño. Personaliza las dimensiones, el color y la distribución de compartimentos para adaptarlo a tu espacio y cantidad de calzado.",
      photos: {
        urls: [
          "default/comodaCuatroCajones.jpg",
          "default/comodaCuatroCajones.jpg",
        ],
      },
      tones: { colors: ["blanco", "negro"] },
      view: 4,
      type: true,
    },
    {
      id: 7,
      name: "mesa de noche",
      slug: "mesa-noche",
      price: 222222,
      description:
        "Diseñada con materiales a tu elección, como melamina o madera, esta mesa de noche es el equilibrio perfecto entre funcionalidad y diseño. Puedes personalizar las dimensiones, el color y la distribución de compartimentos para adaptarla a tus necesidades y al estilo de tu dormitorio. Ideal para mantener tus objetos personales al alcance",
      photos: {
        urls: [
          "default/comodaCuatroCajones.jpg",
          "default/comodaCuatroCajones.jpg",
        ],
      },
      tones: { colors: ["blanco", "negro"] },
      view: 4,
      type: true,
    },
    {
      id: 8,
      name: "escritorio",
      slug: "escritorio",
      price: 222222,
      description:
        "Diseñado para satisfacer las necesidades de entornos profesionales, este escritorio combina materiales de calidad, como melamina o madera, con un diseño funcional y duradero. Personaliza sus dimensiones, colores y características para adaptarlo a oficinas, salas de reuniones o estaciones de trabajo",
      photos: {
        urls: [
          "default/comodaCuatroCajones.jpg",
          "default/comodaCuatroCajones.jpg",
        ],
      },
      tones: { colors: ["blanco", "negro"] },
      view: 4,
      type: false,
    },
    {
      id: 9,
      name: "archivador",
      slug: "archivador",
      price: 222222,
      description:
        "Elaborado con materiales resistentes, como melamina o madera, ofrece durabilidad y un diseño personalizable en dimensiones, colores y compartimentos. Ideal para mantener el orden en oficinas, almacenes o cualquier espacio corporativo, combinando funcionalidad y una apariencia profesional.",
      photos: {
        urls: [
          "archivador/archivador_one.jpg",
          "archivador/archivador_two.jpg",
        ],
      },
      tones: { colors: ["blanco", "negro"] },
      view: 4,
      type: false,
    },
    {
      id: 10,
      name: "estante repisero",
      slug: "estante-repisero",
      price: 222222,
      description:
        " Fabricado con materiales de alta calidad, como melamina o madera, este estante ofrece una solución funcional y elegante para exhibir libros, objetos decorativos o almacenar lo que necesites. Personaliza su tamaño, color y distribución para adaptarlo a tu estilo y espacio.",
      photos: {
        urls: ["repisero/repisero_one.jpg"],
      },
      tones: { colors: ["blanco", "negro"] },
      view: 4,
      type: false,
    },
    {
      id: 11,
      name: "mesones",
      slug: "mesones",
      price: 222222,
      description:
        "Optimiza tu espacio de trabajo con un mesón diseñado a medida, ideal para empresas e instituciones. Fabricado con materiales de alta calidad, como melamina o madera, este mesón se adapta a tus necesidades específicas, ofreciendo opciones personalizables en tamaño, color y distribución",

      photos: {
        urls: [
          "meson/meson_one.jpg",
          "meson/meson_two.jpg",
          "meson/meson_three.jpg",
          "meson/meson_four.jpg",
        ],
      },
      tones: { colors: ["blanco", "negro"] },
      view: 4,
      type: false,
    },
  ]);
}
