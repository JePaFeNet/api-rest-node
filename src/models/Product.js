const products = [
  {
    id: 1,
    name: "Camiseta Deportiva",
    price: 150,
    categories: ["ropa", "deportes"],
  },
  {
    id: 2,
    name: "Zapatos Running",
    price: 1200,
    categories: ["calzado", "deportes"],
  },
  {
    id: 3,
    name: "Mochila Escolar",
    price: 350,
    categories: ["mochilas", "escolar"],
  },
  {
    id: 4,
    name: "Auriculares Bluetooth",
    price: 800,
    categories: ["tecnología", "audio"],
  },
  {
    id: 5,
    name: "Botella Térmica",
    price: 220,
    categories: ["hogar", "accesorios"],
  },
];

export const getAllProducts = () => {
  return products;
};

export const getProductById = (id) => {
  return products.find((item) => item.id == id);
};
