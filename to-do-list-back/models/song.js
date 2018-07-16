const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const Song = new Schema({
  name: String
});

module.exports = mongoose.model("Song", Song);
