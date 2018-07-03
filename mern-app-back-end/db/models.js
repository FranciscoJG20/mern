const mongoose = require('./connection.js')

const SongSchema = new mongoose.Schema({
    name: String,
    length: Number
})

const Songs = mongoose.model("Songs", SongSchema)

module.exports = {Songs}