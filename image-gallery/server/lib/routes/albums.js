const Router = require('express').Router;
const router = Router();
const Album = require('../models/album');
// const Image = require('../models.image');

router
    .get('/', (req, res, next) => {
        Album.find()
            .lean()
            .select('-__v')
            .then(albums => res.send(albums))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        Album.findById(id).lean()
        .then(album => {
            if(!album)res.status(404).send(`${id} not found`);
            else res.send(album);
        })
        .catch(next);
    })

    .post('/', (req, res, next) => {
        new Album(req.body)
            .save()
            .then(album => res.send(album))
            .catch(next);
    })

    .put('/:id', (req, res, next) => {
        Album.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(album => res.send(album))
            .catch(next);
    })

     .delete('/:id', (req, res, next) => {
        Album.findByIdAndRemove(req.params.id)
            .then(response => {
                res.send({ removed: response ? true : false });
            })
            .catch(next);



    



module.exports = router;