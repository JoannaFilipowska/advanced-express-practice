var express = require("express");
var app = express.Router();
let controller = require("../controllers/vehicles-controller");

app.get("/vehicles", function(req, res) {
  res.json(controller.list());
});

app.get("/vehicles/:id", (req, res) => {
  let vehicleId = req.paramas.id;
  res.json(controller.show(vehicleId));
});

app.post("/vehicles", function(req, res) {
  controller.create(req.body);
  res.json(vehicles);
});

module.exports = app;
