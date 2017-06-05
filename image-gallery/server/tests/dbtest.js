require('../connectDB.js');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    name: String,
    images:
});
const Album = mongoose.model('Album', albumSchema);

const albumData = require('../albumsApi.js');
albumData.forEach(albumData => {
    const album = new Album({ name: albumData.name });
    album.save();
});
/*
Album.find()
    .then(albums => console.log(albums))
    .catch(err => console.error(err.message));
    */