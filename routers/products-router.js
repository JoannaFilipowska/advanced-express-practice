var express = require("express");
var router = express.Router();
let products = require("./products");

app.get("/products", function(req, res) {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  let productId = req.paramas.id;
  let product = state.product.find(u => u._id == productId);
  res.json(product);
});

app.post("/products", function(req, res) {
  products.push(req.body);
  res.json(products);
});

module.exports = router;
