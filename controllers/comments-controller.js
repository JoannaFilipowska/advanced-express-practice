let comments = require("./comments");

const list = () => {
  return comments;
};

const show = (id) => {
  return comments.find(c => c._id == id);
};

const create = newComment => {
    comments.push(newComment);
    return comments;
  };

module.export = {
  list,
  show,
  create
};


