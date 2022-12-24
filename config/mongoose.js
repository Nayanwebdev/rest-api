const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DBURL);

const db = mongoose.connection;

db.on("error", () => dbLogError("Database connection failure"));

db.once("open", () => {
  console.log("db connection successful");
});

mongoose.Model.exports = db;
