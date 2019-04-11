var express = require("express");
var router = express.Router();
let contacts = require("./contacts");

app.get("/contacts", function(req, res) {
  res.json(contacts);
});

app.get("/contacts/:id", (req, res) => {
  let contactId = req.paramas.id;
  let contact = state.contact.find(u => u._id == contactId);
  res.json(contact);
});

app.post("/contacts", function(req, res) {
  contacts.push(req.body);
  res.json(contacts);
});
module.exports = router;
