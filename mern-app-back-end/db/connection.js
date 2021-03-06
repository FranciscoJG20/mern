const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/drake-mern')
mongoose.promise = Promise;

if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MLAB_URL)
  } else {
    mongoose.connect("mongodb://localhost/whenpresident");
  }

module.exports = mongoose
