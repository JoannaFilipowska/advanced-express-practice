var express = require('express');
var router = express.Router();
let comments = require("./comments");

app.get("/comments", function(req, res) {
    res.json(comments);
  });

  app.get("/comments/:id", (req, res) => {
    let commentId = req.paramas.id;
    let comment = state.comment.find(u => u._id == commentId);
    res.json(comment);
  });

  app.post("/comments", function(req, res) {
    comments.push(req.body);
    res.json(comments);
  });

module.exports = router;