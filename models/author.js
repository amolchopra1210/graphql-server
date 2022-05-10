const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number,
});

const authorModel = mongoose.model("Author", authorSchema);

module.exports = authorModel;
