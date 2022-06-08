const express = require('express');
const productRouter = express.Router();
const { faker } = require('@faker-js/faker');
const ProductsMemo = require('../api/productsMemo')
const io =require ('../socket')
const apiProducts = new ProductsMemo();

productRouter.post('/', (req, res) => {
  const product = req.body;
  apiProducts.addProduct(product);
  res.redirect('/');
})

productRouter.get('/', (req, res) => {
  const prods = apiProducts.listAll()
  res.render("view", {
    products: prods,
    productsLength: prods.length,
  });
});

productRouter.get('/test', async (req, res) => {
  for (let i = 0; i < 5; i++) {
    apiProducts.addProduct({
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      thumbnail: faker.image.avatar()
    });
  }

  io.emit('productos', apiProducts.listAll());
  res.json("Todo OK");
});

module.exports = productRouter;