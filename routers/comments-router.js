var express = require("express");
var app = express.Router();
let controller = require("../controllers/comments-controller");

app.get("/comments", function(req, res) {
  res.json(controller.list());
});

app.get("/comments/:id", (req, res) => {
  let commentId = req.paramas.id;
  res.json(controller.show(commentId));
});

app.post("/comments", function(req, res) {
  controller.create(req.body);
  res.json(comments);
});

module.exports = app;
