var express = require("express");
var router = express.Router();
let vehicles = require("./vehicles");

app.get("/vehicles", function(req, res) {
  res.json(vehicles);
});

app.get("vehicles/:id", (req, res) => {
  let vehicleId = req.paramas.id;
  let vehicle = state.vehicle.find(u => u._id == vehicleId);
  res.json(vehicle);
});

app.post("/vehicles", function(req, res) {
  vehicles.push(req.body);
  res.json(vehicles);
});
module.exports = router;
