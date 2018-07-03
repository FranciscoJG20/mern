const mongoose = require('mongoose')


if (process.env.NODE_ENV == "production") {
    mongoose.connect(mongodb:Franky:Code23@ds231658.mlab.com:31658/drake-mern)
  } else {
    mongoose.connect("mongodb://localhost/whenpresident");
  }

mongoose.promise = Promise;

module.exports = mongoose
