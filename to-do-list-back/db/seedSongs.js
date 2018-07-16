const mongoose = require("../models/song.js");
const Song = mongoose.model("Song");
const songData = require("./songs-data.json");

Song.remove({})
  .then(() => {
    Song.collection.insert(songData).then(song => {
      console.log(song);
      process.exit();
    });
  })
  .catch(err => {
    console.log(err);
  });
