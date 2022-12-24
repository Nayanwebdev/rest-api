const mongoose = require("mongoose");

const apiSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email:{
    type:String,
    required: true,
  },
  userInfo: {
    type: String,
    required: true,
  },
});

const api = mongoose.model("Api", apiSchema);

module.exports = api;
