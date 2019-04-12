var express = require("express");
var app = express.Router();
let controller = require("../controllers/contacts-controller");

app.get("/contacts", function(req, res) {
  res.json(controller.list());
});

app.get("/contacts/:id", (req, res) => {
  let contactId = req.paramas.id;
  res.json(controller.show(contactId));
});

app.post("/contacts", function(req, res) {
  controller.create(req.body);
  res.json(contacts);
});

module.exports = app;