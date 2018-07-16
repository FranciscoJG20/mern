const mongoose = require("mongoose");
mongoose.promise = Promise;

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL);
} else {
  mongoose.connect("mongodb://localhost/drake-baby");
}

module.exports = mongoose;
