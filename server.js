const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//set the request to routes/api point to items
const items = require("./routes/api/items");

const app = express();

//BodyParser middleware

app.use(bodyParser.json());

//DB congig
const db = require("./config/keys").mongoURI;

//connect to mongo

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected ..."))
  .catch(err => console.log(err));

//Use Routes
//Anythin that points to /api/items should refer to the items variable
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
