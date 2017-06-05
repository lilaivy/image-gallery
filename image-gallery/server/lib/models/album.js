const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    images:[{
        title: String,
        description: String,
        url: String,
        wiki: String
    }]

});

module.exports = mongoose.model('Adress', schema);