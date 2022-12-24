const express = require("express");

const app = express();

const port = process.env.PORT || 3000;
const path = require("path");

const bodyParser = require("body-parser");

require("dotenv/config");
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = require("./config/mongoose");

app.use("/", require("./routes/index"));

app.listen(port, () => {
  console.log("port running on : " + port);
});
