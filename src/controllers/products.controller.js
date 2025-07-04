import * as Model from "../models/Product.js";

export const getAllProducts = (req, res) => {
  const { category } = req.query;

  const products = Model.getAllProducts();

  if (category) {
    const productsFiltered = products.filter((item) =>
      item.categories.includes(category)
    );

    res.json(productsFiltered);
    return;
  }

  res.json(products);
};

export const searchProducts = (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "El nombre es requerido" });
  }

  const products = Model.getAllProducts();

  const productsFiltered = products.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );

  if (productsFiltered.length == 0) {
    return res.status(404).json({ error: "No se encontraron productos" });
  }

  res.json(productsFiltered);
};

export const getProductById = (req, res) => {
  const id = parseInt(req.params.id);

  const product = Model.getProductById(id);

  if (!product) {
    res.status(404).json({ error: "No existe el producto" });
  }

  res.json(product);
};
