const Router = require('express').Router;
const router = Router();
const Album = require('../models/album');
// const Image = require('../models.image');

router
.get('/', (req, res, next) => {
    Album.find()
    .lean()
    .then(album => res.send(album))
    .catch(next);
});



module.exports = router;