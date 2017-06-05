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
})

.post('/', (req, res, next) => {
    const album = req.body;
    Album.find({ name: album.name })
    .count()
    .then(count => {
        if(count > 0) throw { code: 400, error: 'album must be unique'};
        return new Album(album).save()
    })
    .then(album => res.send(album))
    .catch(next);
});



module.exports = router;