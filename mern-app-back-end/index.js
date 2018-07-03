const express = require('express')
const parser = require('body-parser')
const mongoose = require('./db/schema.js')
const cors = require("cors");
const app = express()

app.use(parser.json())
app.use(cors());


app.get('/songs/new', (req, res) => {
    Songs.find()
      .then((songs) => {
        res.json(songs)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  app.get('/songs/new', (req, res) => {
    Songs.create(req.body)
      .then((songs) => {
        res.json(songs)
      })
      .catch((err) => {
        console.log(err)
      })
  })

// define one more router/ controller action to show the
// list of songs 



app.listen(4000, () => {
    console.log('app listening on port 4000')
}) 