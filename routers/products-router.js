var express = require("express");
var app = express.Router();
let controller = require("../controllers/products-controller");

app.get("/products", function(req, res) {
  res.json(controller.list());
});

app.get("/products/:id", (req, res) => {
  let productId = req.paramas.id;
  res.json(controller.show(productId));
});

app.post("/products", function(req, res) {
  controller.create(req.body);
  res.json(products);
});

module.exports = app;
