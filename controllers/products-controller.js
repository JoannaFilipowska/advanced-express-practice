const products = require("../products");

const list = () => {
  return products;
};

const show = id => {
  return products.find(c => c._id == id);
};

const create = newProduct => {
  products.push(newProduct);
  return products;
};

module.export = {
  list,
  show,
  create
};
