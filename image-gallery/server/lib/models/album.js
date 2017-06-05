const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    name: String,
    images:[{
        title: String,
        description: String,
        url: String,
        wiki: String
    }]

});

module.exports = mongoose.model('Album', albumSchema);