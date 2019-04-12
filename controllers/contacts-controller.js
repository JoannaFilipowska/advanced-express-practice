let contacts = require("./contacts");

const list = () => {
  return contacts;
};

const show = id => {
  return contacts.find(c => c._id == id);
};

const create = newContact => {
  contacts.push(newContact);
  return contacts;
};

module.export = {
  list,
  show,
  create
};
