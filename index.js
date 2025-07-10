import "dotenv/config";
import express from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a nuestra API REST!" });
});

import productsRouter from "./src/routes/products.router.js";
app.use("/api", productsRouter);

import notFound from "./src/middlewares/not-found.js";
app.use(notFound);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
