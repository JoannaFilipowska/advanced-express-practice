let express = require("express");
const contacts = require("./routers/contact-router");
const vehicles = require("./routers/vehicles-router");
const comments = require("./routers/comments-router");
const products = require("./routers/products-router");
const bodyParser = require("body-parser");
const app = express();
app.use(
  bodyParser.json(),
  express.static("public"),
  contacts,
  vehicles,
  comments,
  products
);

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log("Web server is now listening for messages on port", port);
});

//Add .get() routes for /contacts/:id, /vehicles/:id, /comments/:id, /products/:id
//* add a path variable for id
//* use the params.id to .find() the item from the appropriate array
//* response.json() the item found

//Create express routes to create one thing
//* Add .post() routes for /contacts, /vehicles, /comments, /products
//* Add the information from the body to the appropriate array
